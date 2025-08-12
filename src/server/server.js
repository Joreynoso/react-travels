import { createServer, Model } from "miragejs"

console.log("--> [MIRAGE SERVER] MirageJS server started")

createServer({
    models: {
        destinations: Model,
    },

    seeds(server) {
        server.create("destination", { 
            id: "1", 
            destination: "Kyoto", 
            country: "Japan", 
            visited: false, 
            urlImage: "https://lp-cms-production.imgix.net/2025-06/shutterstock2315687505-cropped.jpg?auto=format,compress&q=72&w=1440&h=810&fit=crop", 
            description: "Famous for its ancient temples, traditional tea houses, and beautiful cherry blossoms in spring." 
        })
        server.create("destination", { 
            id: "2", 
            destination: "Reykjavik", 
            country: "Iceland", 
            visited: false, 
            urlImage: "https://cdn.britannica.com/71/73371-050-9DFAEC1E/Reykjavik-Iceland.jpg", 
            description: "Known for its colorful houses, vibrant culture, and as a gateway to the Northern Lights." 
        })
        server.create("destination", { 
            id: "3", 
            destination: "Machu Picchu", 
            country: "Peru", 
            visited: true, 
            urlImage: "https://image-tc.galaxy.tf/wijpeg-7ellqz2uqv2l9plk30futx9jr/experiencias-machu-picchu_wide.jpg?crop=0%2C63%2C1200%2C675", 
            description: "An iconic Incan citadel set high in the Andes Mountains, offering breathtaking views and history." 
        })
        server.create("destination", { 
            id: "4", 
            destination: "Santorini", 
            country: "Greece", 
            visited: false, 
            urlImage: "https://res.cloudinary.com/manawa/image/private/c_fill,g_auto,h_630,w_1200,q_auto/uy2qidhrbntj85537glz", 
            description: "Famous for its whitewashed buildings, blue-domed churches, and stunning sunsets over the Aegean Sea." 
        })
        server.create("destination", { 
            id: "5", 
            destination: "New York City", 
            country: "USA", 
            visited: true, 
            urlImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/960px-New_york_times_square-terabass.jpg", 
            description: "A bustling metropolis with world-famous landmarks, diverse neighborhoods, and endless entertainment." 
        })
        server.create("destination", { 
            id: "6", 
            destination: "Cape Town", 
            country: "South Africa", 
            visited: false, 
            urlImage: "https://img.static-kl.com/images/media/B2B667B6-DC8C-46DA-B9F0A9EBF1877EDE", 
            description: "A city framed by Table Mountain, known for its beaches, vineyards, and rich cultural heritage." 
        })
    },

    routes() {
        this.namespace = "api"
        this.logging = false

        // Get all destinations
        this.get("/destinations", (schema) => {
            return schema.destinations.all()
        })

        // Get destination by ID
        this.get("/destinations/:id", (schema, request) => {
            const id = request.params.id
            return schema.destinations.find(id)
        })

        // Create a new destination (POST)
        this.post("/destinations", (schema, request) => {
            const attrs = JSON.parse(request.requestBody)
            return schema.destinations.create(attrs)
        })

        // Update a destination (PUT)
        this.put("/destinations/:id", (schema, request) => {
            const id = request.params.id
            const attrs = JSON.parse(request.requestBody)
            const destination = schema.destinations.find(id)
            return destination.update(attrs)
        })

        // Delete a destination (DELETE)
        this.delete("/destinations/:id", (schema, request) => {
            const id = request.params.id
            return schema.destinations.find(id).destroy()
        })
    }
})
