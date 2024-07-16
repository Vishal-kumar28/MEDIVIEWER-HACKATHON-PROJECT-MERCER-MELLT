// Function to fetch image details
async function fetchImageDetails(image, contentType) {
    try {
        const imageBuffer = Buffer.from(image, 'base64');
        const imageInfo = await sharp(imageBuffer)
            .metadata()
            .then((metadata) => {
                return {
                    format: metadata.format,
                    width: metadata.width,
                    height: metadata.height,
                    size: metadata.size
                };
            })
            .catch((error) => {
                console.error("Error fetching image details:", error);
                throw new Error("Failed to fetch image details");
            });

        return [imageInfo];
    } catch (error) {
        console.error("Error fetching image details:", error);
        throw new Error("Failed to fetch image details");
    }
}