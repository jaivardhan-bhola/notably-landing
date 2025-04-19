/**
 * Utility class for managing page view counts using Netlify Blobs
 * Based on: https://dev.to/kanani_nirav/page-views-counter-netlify-dynamic-site-challenge-using-netlify-blobs-314c
 */
export class NetlifyBlobsUtils {
    constructor(context) {
        if (!context || !context.blobs) {
            throw new Error("Netlify Blobs context is not available");
        }
        this.blobs = context.blobs;
        this.store = "pageViews"; // The name of our blob store
    }

    /**
     * Get the current view count for a page
     */
    async getPageViewsCount(pagePath) {
        try {
            // Try to get the existing count for this page
            const data = await this.blobs.get(`${this.store}/${pagePath}`);

            if (data === null) {
                return 0; // No views yet
            }

            const count = await data.text();
            return parseInt(count, 10);
        } catch (error) {
            console.log(`No existing count found for ${pagePath}, starting from 0`);
            return 0;
        }
    }

    /**
     * Increment the view count for a page
     */
    async incrementPageViewsCount(pagePath) {
        try {
            // Get current count
            const currentCount = await this.getPageViewsCount(pagePath);

            // Increment count
            const newCount = currentCount + 1;

            // Save the updated count
            await this.blobs.set(
                `${this.store}/${pagePath}`,
                newCount.toString(),
                {
                    namespace: this.store,
                    metadata: {
                        lastUpdated: new Date().toISOString(),
                        page: pagePath
                    }
                }
            );

            return newCount;
        } catch (error) {
            console.error(`Error incrementing count for ${pagePath}:`, error);
            throw error;
        }
    }
}