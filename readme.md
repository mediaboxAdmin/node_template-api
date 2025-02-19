
# <a name="structure"></a> Structure
Bien structurer un projet Node.js avec Express offre plusieurs avantages, tels que la facilité de maintenance, la scalabilité, la lisibilité du code, et la facilité d'ajout de nouvelles fonctionnalités. Voici à quoi pourrait ressembler une bonne structure pour un projet Node.js avec Express :
<pre>
- class/
  ├─ uploads/
  │  └─ UsersUpload.js
  │  └─ AdminUpload.js
  ├─ Upload.js
  ├─ Validation.js
- config/
  ├─ lang/
  │  └─ en.json
  │  └─ fr.json
  ├─ keys/
  │  └─ firebase.json
  ├─ app.js
- constants/
  ├─ RESPONSE_CODES.js
  ├─ RESPONSE_STATUS.js
- controllers/
  ├─ auth/
  ├─ admin/
  ├─ service/
- crons/
  ├─ SENDING_PROMOTIONS_EMAILS.js
- middlewares/
  ├─ bindUser.js
  ├─ requireAuth.js.js
- models/
  ├─ User.js
- node_modules/
- public/
- routes/
  ├─ auth
  ├─ admin
  ├─ service
- socket/
  ├─ events.js
  ├─ index.js
- utils/
  ├─ sequerize.js
  ├─ randomInt.js
- views/
  ├─ emails
.env
.gitignore
package-lock.json
package.json
server.js
  </pre>
  Voici une description détaillée de chaque répertoire et fichier :
  - `class/`: Contient des classes qui sont utilisées dans l'application.
- `config/`: Contient des fichiers de configuration de l'application, notamment pour la gestion des langues et des clés d'API spécifiques à votre application.
- `constants/`: Dossier contenant des fichiers définissant des constantes pour l'application.
- `controllers/`: Dossier qui peut contenir des contrôleurs, des fichiers qui gèrent la logique de contrôle de votre application.
- `crons/`: Dossier qui peut contenir des fichiers liés à l'exécution de tâches cron, par exemple, pour l'automatisation de certaines actions.
- `middlewares/`: Dossier pour les middlewares, des fonctions intermédiaires qui peuvent être utilisées pour intercepter ou modifier des requêtes HTTP.
- `models/`: Dossier qui contient les définitions de modèles de données pour l'application.
- `node_modules/`: Dossier où les dépendances de votre projet sont installées par npm.
- `public/`: Dossier où vous placez des fichiers statiques tels que des images, des styles CSS et des scripts JavaScript, qui seront accessibles publiquement.
- `routes/`: Dossier qui peut contenir les fichiers de définition des routes pour votre application.
- `socket/`: Dossier qui peut contenir des fichiers liés à la gestion des sockets, utilisés pour la communication en temps réel.
- `utils/`: Dossier qui contient des utilitaires, par exemple, des fonctions ou des configurations réutilisables.
- `views/`: Dossier qui contient des fichiers de vue si votre application utilise un moteur de template.
- `.env`: Fichier de configuration pour les variables d'environnement.
- `.gitignore`: Fichier spécifiant les fichiers et répertoires à ignorer lors de la gestion de version avec Git.
- `package-lock.json`: Fichier généré par npm pour fixer les versions exactes des dépendances.
- `package.json`: Fichier de configuration de Node.js listant les métadonnées du projet et les dépendances.
- `server.js`: Fichier principal où le serveur Express est configuré et démarré.

# Liste de dépendances couraments utilisées
| Dépendance |  Description                          |
| :-------: | :----------------------------------------------------------: |
| axios  | Pour effectuer des request http  |
| bcrypt  | Pour cryptage des mots de passe  |
| convert-excel-to-json  | Pour lire des fichiers excel et les convertir en json  |
| cors  | Pour la configuration des cors  |
| dotenv  | Pour la gestion des fichiers d'environnement  |
| ejs  | Moteur de template pour nodejs  |
| i18n  | Internationalisation  |
| jsonwebtoken  | Gestion des tokens d'authentification  |
| moment  | Manipulation des dates  |
| mysql2  | Driver pour gerer mysql  |
| nodemailer  | Pour envoyer les emails  |
| nodemon  | Gerer le hotrefresh apres enregistrement du fichier  |
| pdfkit  | Generer des fichiers pdf  |
| sequelize  | ORM de gestion d'une base de donnees  |
| sharp  | Manipulation des images comme la compression  |
| socket.io  | Gestion des evenements en temps reel  |
| express-fileupload  | Un middleware pour express qui facilite la gestion de l'upload de fichiers  |

# Nomencleture des fichiers
## Les routes
