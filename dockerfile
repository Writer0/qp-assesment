# Use the official Node.js image
FROM node:22.14.0

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project
COPY . .

# Expose port
EXPOSE 5083

# Start the application
CMD ["npm", "start"]
