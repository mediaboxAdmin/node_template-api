# <a name="structure"></a> Structure

Bien structurer un projet Node.js avec Express offre plusieurs avantages, tels que la facilité de maintenance, la scalabilité, la lisibilité du code, et la facilité d'ajout de nouvelles fonctionnalités. Voici à quoi pourrait ressembler une bonne structure pour un projet Node.js avec Express :
<pre>
📂 public
📂 node_modules
📂 modules
│   └── 📂 utilisateurs
│       └── utilisateur.controller.js
|       └── Utilisateurs.model.js
|       └── utilisateurs.routes.js
|       └── utilisateurs.service.js
|       └── utilisateurs.upload.js
|       └── utilisateur.schema.js  
|       └── index.js
📂 constants
│   └── RESPONSE_CODES.js
│   └── RESPONSE_STATUS.js
📂 middlewares
|   └── bindUser.middleware.js
|   └── requireAuth.middleware.js.
|   └── validateSchema.middleware.js
|   └── authorize.middleware.js
📂 config
|   └── 📂 lang
|       └── en.json
|       └── fr.json
|   └── app.config.js
📂 socket
|    └── events.socket.js
|    └── index.socket.js
📂 crons
     └── sending_promotion_emails.cron.js
📂 utils
|    └── sequerize.util.js
|    └── randomInt.util.js
|    └── upload.util.js
📂 views
|    └── 📂  emails
|        └── utilisateur_enregistre.views.ejs
.env
.gitignore
package-lock.json
package.json
server.js
</pre>

Voici une description détaillée de la structure :

- **`public/`**: Dossier où vous placez des fichiers statiques tels que des images, des styles CSS et des scripts JavaScript, qui seront accessibles publiquement.
- **`modules/`** : Contient tous les dossiers y compris les fichiers des domaines de l'application.
- **`constants/`**: Dossier contenant des fichiers définissant des constantes pour l'application.
- **`config/`**: Contient des fichiers de configuration de l'application, notamment pour la gestion des langues et des clés d'API spécifiques à votre application.
- **`crons/`**: Dossier qui peut contenir des fichiers liés à l'exécution de tâches cron, par exemple, pour l'automatisation de certaines actions.
- **`middlewares/`**: Dossier pour les middlewares, des fonctions intermédiaires qui peuvent être utilisées pour intercepter ou modifier des requêtes HTTP.
- **`node_modules/`**: Dossier où les dépendances de votre projet sont installées par npm.
- **`socket/`**: Dossier qui peut contenir des fichiers liés à la gestion des sockets, utilisés pour la communication en temps réel.
- **`utils/`**: Dossier qui contient des utilitaires, par exemple, des fonctions ou des configurations réutilisables.
- **`views/`**: Dossier qui contient des fichiers de vue si votre application utilise un moteur de template.
- **`.env.example`**: Fichier de configuration pour les variables d'environnement.
- **`.gitignore`**: Fichier spécifiant les fichiers et répertoires à ignorer lors de la gestion de version avec Git.
- **`package-lock.json`**: Fichier généré par npm pour fixer les versions exactes des dépendances.
- **`package.json`**: Fichier de configuration de Node.js listant les métadonnées du projet et les dépendances.
- **`server.js`**: Fichier principal où le serveur Express est configuré et démarré.

# Liste de dépendances

Voici la liste des dépendances qui viennent préinstallées par défaut. Assurez-vous de garder celles que vous utilisez et désinstallez celles dont vous pensez que vous n'aurez pas besoin.

|      Dépendance       |                                Description                                 |
| :-------------------: | :------------------------------------------------------------------------: |
|         axios         |                      Pour effectuer des request http                       |
|        bcrypt         |                      Pour cryptage des mots de passe                       |
| convert-excel-to-json |           Pour lire des fichiers excel et les convertir en json            |
|         cors          |                       Pour la configuration des cors                       |
|        dotenv         |                Pour la gestion des fichiers d'environnement                |
|          ejs          |                       Moteur de template pour nodejs                       |
|         i18n          |                            Internationalisation                            |
|     jsonwebtoken      |                   Gestion des tokens d'authentification                    |
|        date-fns       |                           Manipulation des dates                           |
|        mysql2         |                          Driver pour gerer mysql                           |
|      nodemailer       |                          Pour envoyer les emails                           |
|        nodemon        |            Gerer le hotrefresh apres enregistrement du fichier             |
|        pdfkit         |                          Generer des fichiers pdf                          |
|       sequelize       |                    ORM de gestion d'une base de donnees                    |
|         sharp         |                Manipulation des images comme la compression                |
|       socket.io       |                    Gestion des evenements en temps reel                    |
|  express-fileupload   | Un middleware pour express qui facilite la gestion de l'upload de fichiers |

# Règles à suivre

## Application

`Règle 1` : Il est strictement interdit de modifier la structure du projet, les fonctions ou classes prédéfinies de base, sauf s'il existe une raison valable et validée par la direction technique.

`Règle 2` : Avant d'ajouter un module, assurez-vous qu'il n'existe pas déjà un module défini répondant au même besoin.

`Règle 3` : Avant d'ajouter une fonction, assurez-vous qu'il n'existe pas déjà une fonction réalisant la même tâche.

`Règle 4` : Valider les entrées par des bibliothèques robustes et bien testées comme `yup`, `express-validator`, `joi` etc.

`Règle 5` : Ecrire les schémas de validation dans son propre fichier pour faciliter la réutilisabilité et la séparation des préocupations.

<pre>
// utilisateur.schema.js
import * as yup from 'yup';

const schemaUtilisateur = yup.object().shape({
  nomUtilisateur: yup
    .string()
    .required("Le nom d'utilisateur est obligatoire.")
    .min(3, "Le nom d'utilisateur doit contenir au moins 3 caractères.")
    .max(50, "Le nom d'utilisateur ne doit pas dépasser 50 caractères."),
  email: yup
    .string()
    .email("L'adresse e-mail n'est pas valide.")
    .required("L'adresse e-mail est obligatoire.")
});

export default schemaUtilisateur;
</pre>

`Règle 6` : Appliquer la validation des entrées au niveau d'un middleware(filtre Http) pour s'assurer de recupérer les données bien filtrées.

<pre>
// valildateSchema.middleware.js
const validateSchema = (schema) => async (req, res, next) => {
  try {
    await schema.validate(req.body); // Vous pouvez adapter à req.params, req.query, etc.
    next(); // Si la validation réussit, passe au middleware ou au gestionnaire de route suivant
  } catch (error) {
    // Si la validation échoue, renvoie une réponse d'erreur
    return res.status(400).json({ errors: error.errors });
  }
};
</pre>

<pre>
// utilisateurs.routes.js
utilisateur_routes.post('/utilisateurs', validateSchema(createUtilisateurSchema), (req, res) => { ... });
</pre>

`Règle 7` : Évitez d'encombrer les controllers : placez toute la logique dans une couche de services

<pre>
     // utilisateurs.controller.js
     async function getUtilisateurs(req, res) {
          try {
               const utilisateurs = UtilisateursService.getAllUtilisateurs(req);
               return res.status(200).json(...)
          } catch(error) {
               // retourner l'erreur ici
          }
     }

     // utilisateurs.service.js
     function getAllUtilisateurs(req) {
          // récuperer les filtres pour les requêtes
          // appliquer la pagination
          // récuperer les données de la base de données
          etc.
     }
</pre>

## Nomenclature des fichiers

`Règle 8`  : Utilisez toujours un suffixe pour indiquer le rôle ou la responsabilité du fichier par ex: `utilisateurs.controller.js`, `Utilisateur.model.js` ect.

`Règle 9`  : Le nom d'un fichier contenant une classe doit commencer par une lettre majuscule

`Règle 10` : Les constantes doivent toujours être écrites en majuscules.

`Règle 11` : Le nom d'un fichier de contrôleur doit être en minuscule underscore et porté le même nom que la table si possible

```
✅ utilisateur.controller.js
❌ utilisateuController.js
❌ utilisateu_controller.js
```

`Règle 12`: Par convention, Les noms de fichiers cron doivent toujours être écrits en minuscules.

`Règle 13`: Les noms de fichiers des middlewares doivent toujours être nommés en camelCase.

```
✅ requireAuth.middleware.js
❌ require_auth.middleware.js
❌ requireauth.middleware.js
```

`Règle 14`: Les noms de fichiers des models doivent toujours commencer par une majuscule.

```
✅ Utilisateurs_tokens.model.js
❌ UtilisateursTokens.model.js
❌ utilisateurs_tokens.model.js
```

`Règle 15`: Les noms de fichiers des models doivent être identique avec le nom de la table.

```js
// Pour la table "utilisateurs"
✅ Utilisateurs.model.js
❌ Utilisateur.model.js
❌ UtilisateursModel.js
```

`Règle 16`: Le nom d'un fichier des routes doit être en minuscule underscore, suffixé par `.routes.js.` et porté le même nom que la table si possible

```js
// Pour la table utilisateurs
✅ utilisateurs.routes.js
❌ utilisateursRoutes.js
❌ utilisateursroutes.js
```

`Règle 17`: Le nom de fichier d'un événement Socket doit être en miniscule et correspondre à l'événement auquel il est associé.

`Règle 18`: Le nom de fichier d'un test unitaire doit être en minuscule underscore et suffixé par `.test.js.`

```
✅ app.test.js
❌ appTest.js
❌ app_test.js
```

## Les controllers

`Règle 19`: Chaque fonction doit être commentée en suivant le format de <a href="https://jsdoc.app/">JSDoc</a>

```js
/**
 * Permet de creer un corporate
 * @date  10/07/2023
 * @param {express.Request} req
 * @param {express.Response} res
 * @author eloge257 <nirema.eloge@mdiabox.bi>
 */
const createUtilisateur = async (req, res) => {}
```

`Règle 20`: Les fonctions doivent être des fonctions fléchées (arrow functions).

```js
// ✅ Correct
const createUtilisateur = async (req, res) => {
   // code
}

// ❌ Incorrect
async function createUtilisateur(req, res) {
   //code
}
```

`Règle 21`: Chaque réponse HTTP doit être au format JSON, défini de la manière suivante :

```js
{
   statusCode: RESPONSE_CODES.OK, // Le code http de la réponse
   httpStatus: RESPONSE_STATUS.OK, // Le statut http de la réponse
   message: "Liste des agents", // Le message de la réponse
   result: [] // Les données
}
```

`Règle 22`: Les codes et statuts HTTP doivent provenir des constantes `RESPONSE_CODES` et `RESPONSE_STATUS`.

```js
// ✅ Correct
{
   statusCode: RESPONSE_CODES.OK,
   httpStatus: RESPONSE_STATUS.OK,
   message: "Liste des agents",
   result: []
}


// ❌ Incorrect
{
   statusCode: 404,
   httpStatus: "NO_TROUVE",
   message: "Liste des agents",
   result: []
}
```

## Les modeles

`Règle 23`: Le nom d'un alias dans les associations doit correspondre au nom de la table

```js
// ✅ Correct
Utilisateurs.belongsTo(Profils, { foreignKey: "ID_PROFIL", as: "profils" })

// ❌ Incorrect
Utilisateurs.belongsTo(Profils, { foreignKey: "ID_PROFIL", as: "profil" })

// ❌ Incorrect
Utilisateurs.belongsTo(Profils, { foreignKey: "ID_PROFIL", as: "utilisateur_profil" })
```

`Règle 24`: Les associations utilisant les mêmes modèles doivent être définies dans le même fichier de modèle afin d’éviter les problèmes de chargement avec Sequelize.

## Les routes

`Règle 25`: Les routes doivent toujours être en minuscules.

```js
// ✅ Correct
utilisateur_routes.post("/mis_a_jour", utilisateur_routes_controller.createUtilisateur)
utilisateur_routes.post("/process/validation_etape", utilisateur_routes_controller.createUtilisateur)

// ❌ Incorrect
utilisateur_routes.post("/misajour", utilisateur_routes_controller.createUtilisateur)
utilisateur_routes.post("/process/validationEtape", utilisateur_routes_controller.createUtilisateur)
```

`Règle 26`: Chaque route définie doit être commentée en suivant le format suivant :

```js
/**
 * Une route pour enregistrer un utilisateur
 * @method POST
 * @url /admin/utilisateurs
 */
utilisateur_routes.post("/", utilisateur_routes_controller.createUtilisateur)
```

## Contribution

### Lancer les tests localement

Pour lancer les test unitaires on utilise jest en executant cette commande:

```
npm run test
```

### Formatage du code source

Nous utilisons <a href="https://prettier.io/">Prettier</a> pour formater le code source

Vous pouvez formater automatiquement votre code en exécutant :

```
npx prettier . --write
```

### Linting/verifying votre code

Vous pouvez vérifier que votre code est correctement formaté et respecte le style de codage en exécutant :

```
npm run lint
```

### Guide des messages de commit

Nous avons des règles très précises sur la façon dont nos messages de commit Git doivent être formatés. Cela permet d'avoir des messages plus lisibles et faciles à suivre lors de l'exploration de l'historique du projet. Vous trouverez plus de détails sur ces règles <a href="https://gist.github.com/pmutua/7008c22908f89eb8bd21b36e4f92b04f">ici</a>

Voici le format d'un message de commit:

```
<type>(<scope>): <subject>
```

#### Type

Doit être l'un des suivants :

- build : Modifications affectant le système de build ou les dépendances externes (exemples de scopes : gulp, broccoli, npm).
- ci : Modifications des fichiers de configuration et scripts de l'intégration continue (exemples de scopes : Circle, BrowserStack, SauceLabs).
- docs : Modifications concernant uniquement la documentation.
- feat : Ajout d'une nouvelle fonctionnalité.
- fix : Correction d'un bug.
- perf : Modification du code visant à améliorer les performances.
- refactor : Modification du code qui ne corrige pas un bug et n'ajoute pas de nouvelle fonctionnalité.
- style : Modifications qui n'affectent pas le fonctionnement du code (espaces, formatage, points-virgules manquants, etc.).
- test : Ajout ou correction de tests existants.

#### scope

Scope est un module

#### subject

Le sujet contient une description succincte de la modification :

- Utilisez l'impératif au présent : "changer" et non "J'ai changeé" ou "les echanges".
- Ne mettez pas de majuscule à la première lettre.
- Ne terminez pas par un point (.).

Examples:

- ✅ feat(auth): ajouter la route pour reinitialiser le mot de passe
- ✅ fix(dashboard): corriger le probleme des donnees non correspondantes
- ✅ refactory(ihm): enlever les commentaires unitiles
