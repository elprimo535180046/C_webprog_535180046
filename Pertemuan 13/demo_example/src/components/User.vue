<template>
    <section class="section">
        <div class="container is-max-desktop">
            <h1 class="title">Users</h1>
            <hr>
            <div class="buttons">
                <b-button class="is-primary" tag="router-link" to="/user-add">Add new User</b-button>
                <b-button class="is-secondary" tag="router-link" :to="{ name:
                'UserDetail', params: { id: 123}}">Edit User</b-button>
                <b-button class="is-danger" @click="trashModal">Delete User</b-button>
            </div>
            <b-table :data="users" :columns="columns"/>
        </div>
    </section>
</template>

<script>
export default {
  data () {
    return {
      users: [
        {
          'no': 1,
          'username': 'johnthor',
          'email': 'john.thor@gmail.com',
          'fullname': 'Johnny Thoriq'
        },
        {
          'no': 2,
          'username': 'johnny',
          'email': 'john.ny@gmail.com',
          'fullname': 'Johan Nurul Qusny'
        },
        {
          'no': 3,
          'username': 'johndhela',
          'email': 'john.dhela@gmail.com',
          'fullname': 'Johanita Adhela'
        }
      ],
      columns: [
        {
          field: 'no',
          label: 'No',
          width: '40',
          numeric: true,
          centered: true
        },
        {
          field: 'username',
          label: 'Username',
          centered: true
        },
        {
          field: 'email',
          label: 'Email Address',
          centered: true
        },
        {
          field: 'fullname',
          label: 'Full Name',
          centered: true
        }
      ]
    }
  },
  methods: {
    trashModal () {
      this.$buefy.dialog.confirm({
        title: 'Delete Confirmation',
        message: 'Are you sure want to delete <b>this User</b>?',
        confirmText: 'Yes',
        cancelText: 'Cancel',
        type: 'is-danger',
        onConfirm: () => {}
      })
    }
  }
}
</script>
