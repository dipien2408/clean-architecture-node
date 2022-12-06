read -p "Input feature: " feature
code -r lib/interfaces/routes/$feature/$feature-route.js
code -r lib/interfaces/controllers/$feature/$feature-controllers.js
code -r lib/domain/mongod/schemas/$feature-schema.js