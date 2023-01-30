try {
	// écouteur de fin de chargement de page DOMContentLoaded
	// pour avoir la certitude que tous les éléments du DOM
	// sont chargés
	document.addEventListener("DOMContentLoaded", () => {
		console.log("Content Loaded");

		//! Cacher/Afficher la modal 。。+゜゜。。+゜゜。。+゜゜。。+゜゜。。+゜゜。。+゜゜。。+゜゜。。+゜゜。。+゜゜。。+゜゜。。+゜゜。。+゜゜。。゜+゜。。+゜゜

		document.querySelector("#login").addEventListener("click", () => {
			console.log("test click");
			//console.dir(login);// `dir` retournera l'arbre de l'élément
			document.querySelector(".modal").classList.add("modalHidden");
			document.querySelector(".cadreForm").classList.add("cadreFormHidden");
		});
		const btn = document.querySelector("#echap");

		const btnEchap = document
			.querySelector("#echap")
			.addEventListener("click", () => {
				console.log("test click X");
				document.querySelector(".modal").classList.remove("modalHidden");
				document
					.querySelector(".cadreForm")
					.classList.remove("cadreFormHidden");
			});

		//!   Gestion du formulaire 。。+゜゜。。+゜゜。。+゜゜。。+゜゜。。+゜゜。。+゜゜。。+゜゜。。+゜゜。。+゜゜。。+゜゜。。+゜゜。。+゜゜。。゜+゜。。+゜゜

		document
			.querySelector("#form")
			.addEventListener("submit", async (event) => {
				// try {
				// empêcher le refresh de la page au submit
				event.preventDefault();
				console.log("submit");

				const firstname = document.querySelector("#firstname").value;
				const lastname = document.querySelector("#lastname").value;
				const email = document.querySelector("#email").value;
				const message = document.querySelector("#message").value;

				console.log({
					firstname,
					lastname,
					email,
					message,
				});

				// réquête vers le serveur en local // import d'axios ds index.html
				const { data } = await axios.post(
					"https://site--mytripadvisorbackend--hw4gvwsxlwd5.code.run/form", //"http://127.0.0.1:3000/form" https://site--mytripadvisorbackend--hw4gvwsxlwd5.code.run/form
					{
						firstname,
						lastname,
						email,
						message,
					}
				);

				console.log("response>>", data);
				// } catch (error) {
				// 	res.status(400).json(error.message);
				// }
			});
	});
} catch (error) {
	res.status(400).json(error.message);
}
