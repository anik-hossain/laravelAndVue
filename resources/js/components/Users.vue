<template>
  <div class="container">
    <div class="row mt-3">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">All Users</h3>

            <div class="card-tools">
              <button class="btn btn-success" data-toggle="modal" data-target="#newUser">
                Add New
                <i class="fa fa-user-plus"></i>
              </button>
            </div>
          </div>
          <!-- /.card-header -->
          <div class="card-body table-responsive p-0">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Type</th>
                  <th>Modify</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>183</td>
                  <td>John Doe</td>
                  <td>11-7-2014</td>
                  <td>
                    <span class="tag tag-success">Approved</span>
                  </td>
                  <td>
                    <a href="#" class="mr-2">
                      <i class="fa fa-edit"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-trash"></i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- /.card-body -->
        </div>
        <!-- /.card -->
      </div>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="newUser"
      tabindex="-1"
      aria-labelledby="newUserLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="newUserLabel">Add New User</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
<<<<<<< HEAD
          <form @submit.prevent="createUser">
            <div class="modal-body">
              <div class="form-group">
                <input
                  placeholder="Name"
                  v-model="form.name"
                  type="text"
                  name="name"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('name') }"
                />
                <has-error :form="form" field="name"></has-error>
              </div>
              <div class="form-group">
                <input
                  placeholder="Email"
                  v-model="form.email"
                  type="email"
                  name="email"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('email') }"
                />
                <has-error :form="form" field="email"></has-error>
              </div>
              <div class="form-group">
                <textarea
                  placeholder="Bio"
                  v-model="form.bio"
                  type="text"
                  name="bio"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('bio') }"
                ></textarea>
                <has-error :form="form" field="bio"></has-error>
              </div>
              <div class="form-group">
                <select name="type" id="type" class="form-control" v-model="form.type">
                  <option value>Select User Roll</option>
                  <option value="admin">Admin</option>
                  <option value="user">Standaed User</option>
                  <option value="author">Author</option>
                </select>
                <has-error :form="form" field="type"></has-error>
              </div>
              <div class="form-group">
                <input
                  placeholder="Password"
                  v-model="form.password"
                  type="password"
                  name="password"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('password') }"
                />
                <has-error :form="form" field="email"></has-error>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-primary">Create</button>
            </div>
          </form>
=======
          <div class="modal-body">...</div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Create</button>
          </div>
>>>>>>> 60adf38a0171549a240b394cb6bde936696ce49c
        </div>
      </div>
    </div>
  </div>
<<<<<<< HEAD
</template>

<script>
export default {
  name: "Users",
  data() {
    return {
      form: new Form({
        name: "",
        email: "",
        password: "",
        type: "",
        bio: "",
        photo: ""
      })
    };
  },
  methods: {
    createUser() {
      this.form.post('/api/user')
    }
  }
};
</script>
=======
</template>
>>>>>>> 60adf38a0171549a240b394cb6bde936696ce49c
