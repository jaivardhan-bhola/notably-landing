// Netlify function to handle visitor counting
// Uses Netlify's KV store to persist the count

exports.handler = async function (event, context) {
    // Set CORS headers to allow requests from your domain
    const headers = {
        'Access-Control-Allow-Origin': '*', // Restrict this in production
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    };

    // Handle preflight OPTIONS request
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 204,
            headers,
            body: ''
        };
    }

    // Get KV store client
    const { getStore } = require('@netlify/blobs');
    const store = getStore('visitor-count');

    try {
        let count = 0;

        try {
            // Try to get the existing count
            const data = await store.get('count');
            if (data) {
                count = parseInt(data.toString(), 10);
            }
        } catch (error) {
            console.log('No existing count, starting from 0');
        }

        if (event.httpMethod === 'POST') {
            // Increment the count for POST requests
            count += 1;
            await store.set('count', count.toString());
        }

        // Return the current count
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ count })
        };
    } catch (error) {
        console.error('Error with visitor count:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: 'Failed to retrieve or update visitor count' })
        };
    }
};