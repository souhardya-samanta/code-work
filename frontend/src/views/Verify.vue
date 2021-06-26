<template>
  <div class="min-h-screen bg-gray-200 flex justify-center items-center">
    <div class="sm:w-1/4 p-2">
      <div class="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
        <div v-if="error">Something went wrong</div>
        <div v-if="this.$store.getters.userProfile.user.auth || verify">
          You are verified with 2 Factor Authentication.
        </div>
        <div v-else>
          <div class="mb-5 mt-2">
            <label class="text-2xl text-semibold">Let's get verified</label>
            <br />
            <label class="text-md text-semibold text-center"
              >Open your google authenticator app to scan the QR Code below and
              enter the revealed code.</label
            >
          </div>
          <button
            @click="generate"
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
              mb-3
            "
          >
            Genereate QR Code
          </button>
          <img
            class="w-100 rounded border-2 mb-5 block ml-auto mr-auto"
            :src="url"
          />
          <div class="w-full mb-2">
            <input
              v-model="code"
              class="
                border-0
                px-3
                py-3
                placeholder-gray-400
                text-gray-700
                bg-white
                rounded
                text-sm
                shadow
                focus:outline-none
                focus:ring
                w-full
              "
              placeholder="Verification code"
              style="transition: all 0.15s ease 0s"
            />
          </div>
          <button
            @click="verification"
            class="
              bg-transparent
              hover:bg-blue-500
              text-blue-700
              font-semibold
              hover:text-white
              py-2
              px-4
              border border-blue-500
              hover:border-transparent
              rounded
              mt-3
            "
          >
            VERIFY
          </button>
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
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      url: '',
      code: '',
      error: false,
      verify: false
    }
  },
  methods: {
    generate () {
      this.$store
        .dispatch('GENERATE', this.$store.getters.userProfile.user._id)
        .then((res) => {
          this.url = res.data
          this.error = false
          console.log('URL', res)
        })
        .catch((error) => {
          console.log(error)
          this.error = true
        })
    },
    verification () {
      this.$store
        .dispatch('VERIFY', {
          _id: this.$store.getters.userProfile.user._id,
          code: this.code
        })
        .then((res) => {
          this.error = false
          this.verify = res
        })
        .catch((error) => {
          console.log(error)
          this.error = true
        })
    },
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
    console.log('USER ID', this.$store.getters.userProfile.user._id)
  }
}
</script>
