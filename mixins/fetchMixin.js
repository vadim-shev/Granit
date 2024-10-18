export default {
	methods: {
		fetchAPI(pathToFile) {
            return fetch(pathToFile).then(response => {
                if (!response.ok) throw new Error('NOT ok!')
                return response.json()
            })
        }
	}
}