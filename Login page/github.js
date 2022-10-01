class GitHub {

    constructor() {
        this.client_id = 'e29a009f0b240b811f7b'
        this.client_secret = '98bdbbb94e4546bebccead00557b413e54e3c86f'
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {

        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)

        const profile = await profileResponse.json()

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)

        const repos = await repoResponse.json()

        return {
            profile,
            repos
        }
    }
}