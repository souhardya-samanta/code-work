<template>
  <div class="min-h-screen bg-gray-200 flex justify-center items-center">
    <div class="sm:w-1/4 p-2">
      <div class="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
        <div class="mb-3">
          <img
            class="w-20 mx-auto rounded-full border-2"
            src="https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=6&m=1223671392&s=612x612&w=0&h=NGxdexflb9EyQchqjQP0m6wYucJBYLfu46KCLNMHZYM="
          />
        </div>
        <h2 class="text-xl font-medium text-gray-700">{{ user.user.name }}, {{user.user.age}}</h2>
        <span class="text-sm block mb-5">{{ user.user.email }}</span>
        <div v-if="user.user.auth">
          Two factor authentication has been enabled!
          <button
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
            mt-2
          "
        >
          DISABLE
        </button>
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        user: {
          age: 0,
          auth: null,
          _id: '60d4cfd667c6d036476d0177',
          name: 'Test Buddy',
          email: 'test@test.com',
          password:
            '$2a$08$N71Y5qNIEm5DyRR8zGhtaOhlmUD4n8cR2hiGogmwa0c6mje7QHcLS',
          tokens: [
            {
              _id: '60d4d5ebedc4d55bc42f9b4a',
              token:
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGQ0Y2ZkNjY3YzZkMDM2NDc2ZDAxNzciLCJpYXQiOjE2MjQ1NjExMzF9.R9Bz9buOvHjrBwrBbRROR3LgYRwbMbxpiJ9PgpKkkWs'
            },
            {
              _id: '60d5fe5ea166271368149b87',
              token:
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGQ0Y2ZkNjY3YzZkMDM2NDc2ZDAxNzciLCJpYXQiOjE2MjQ2MzcwMjJ9.VFY9VSL2CrMoMYShDDJx8w6gFJR4yNIjX-8sW_mx47A'
            }
          ],
          __v: 3
        },
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGQ0Y2ZkNjY3YzZkMDM2NDc2ZDAxNzciLCJpYXQiOjE2MjQ2MzcwMjJ9.VFY9VSL2CrMoMYShDDJx8w6gFJR4yNIjX-8sW_mx47A'
      }
    }
  },
  created () {
    console.log('User', this.user)
  }
}
</script>
