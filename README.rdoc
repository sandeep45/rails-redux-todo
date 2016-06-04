## Redux Todo App with Rails backend

````
npm install
bundle install
rake db:migrate
rails s
````

Check that rails app is working: `http://localhost:3000/notes`. You should be able to do standard CRUD operations.

Check out the redux View for the same: `http://localhost:3000/assets/redux-todos/dist/index.html`. Standard CRUD operations should continue to work.

To see the redux app make ajax requests, wait and process results, slow down the backend by uncommenting the sleep filter in `notes_controller.rb`.

