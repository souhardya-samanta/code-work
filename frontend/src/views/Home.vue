<template>
  <div class="min-h-screen bg-gray-200 flex justify-center items-center">
    <div class="sm:w-1/4 p-2">
      <div class="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
        <div v-if="user">
          <div class="mb-3">
            <img
              class="w-20 mx-auto rounded-full border-2"
              src="https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=6&m=1223671392&s=612x612&w=0&h=NGxdexflb9EyQchqjQP0m6wYucJBYLfu46KCLNMHZYM="
            />
          </div>
          <h2 class="text-xl font-medium text-gray-700">
            {{ user.name }}, {{ user.age }}
          </h2>
          <span class="text-sm block mb-5">{{ user.email }}</span>
          <div v-if="user.auth">
            Two factor authentication has been enabled!
          </div>
          <div v-else>
            Two factor authentication is not enabled.
            <br />
            <router-link to="/verify">
              <button
                class="
                  bg-transparent
                  hover:bg-green-500
                  text-green-700
                  font-semibold
                  hover:text-white
                  py-2
                  px-4
                  border border-green-500
                  hover:border-transparent
                  rounded
                  mt-2
                "
              >
                ENABLE
              </button>
            </router-link>
          </div>
          <button
            @click="logout"
            class="
              bg-transparent
              hover:bg-red-500
              text-red-700
              font-semibold
              hover:text-white
              py-2
              px-4
              border border-red-500
              hover:border-transparent
              rounded
              mt-3
            "
          >
            LOGOUT
          </button>
        </div>
        <div v-else>
          Please login first to continue
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: null,
      error: false
    }
  },
  methods: {
    logout () {
      this.$store
        .dispatch('LOGOUT')
        .then((res) => {
          this.$router.push('/login')
        })
        .catch((error) => {
          console.log(error)
          this.error = true
        })
    }
  },
  created () {
    this.user = this.$store.getters.userProfile.user
  }
}
</script>
