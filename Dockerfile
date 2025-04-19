# Use official Nginx image
FROM nginx:alpine

# Copy all website files to nginx's html folder
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80
