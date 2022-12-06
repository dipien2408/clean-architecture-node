mason make feature_brick -o ../../ --on-conflict append

code -r ../../lib/domain/mongod/collections.js

code -r ../../lib/domain/mongod/models.js

code -r ../../app/router.js