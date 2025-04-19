// Visitor counter using Netlify Blobs for persistence
// Based on: https://dev.to/kanani_nirav/page-views-counter-netlify-dynamic-site-challenge-using-netlify-blobs-314c
import { NetlifyBlobsUtils } from "./utils/netlify-blobs-utils";

export default async (req, context) => {
    // Set CORS headers for all responses
    const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Content-Type": "application/json"
    };

    // Handle preflight OPTIONS request
    if (req.method === "OPTIONS") {
        return new Response(null, {
            status: 204,
            headers
        });
    }

    try {
        const { slug = "home" } = context.params || {};
        const pagePath = slug || "home";

        const blobsUtils = new NetlifyBlobsUtils(context);
        let pageViews = await blobsUtils.getPageViewsCount(pagePath);

        if (req.method === "POST") {
            // Increment the counter for POST requests
            pageViews = await blobsUtils.incrementPageViewsCount(pagePath);
        }

        return Response.json({ count: pageViews }, { headers });
    } catch (error) {
        console.error("Error handling page views:", error);

        return Response.json(
            { error: "Failed to process page views", message: error.message },
            { status: 500, headers }
        );
    }
};

export const config = {
    path: "/api/visitor-count"
};