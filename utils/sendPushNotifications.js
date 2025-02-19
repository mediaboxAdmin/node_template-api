const { Expo } = require("expo-server-sdk");
let expo = new Expo();
const axios = require("axios").default;
const firebase = require("../config/firebase");

const handleNotificationsReponsens = async (responses, isRider = false) => {
          const updateRiders = []
          const updatesRiders = []
          responses.forEach(response => {
                    if(!response.success && response.error && response.error.code == "messaging/registration-token-not-registered") {
                              
                    }
          })
}

module.exports = async function sendPushNotifications(
  tokens,
  title,
  body,
  data = {},
  moreOptions = {},
  isRider = false
) {
  try {
    const notifee = data.notifee || {};
    const android = notifee.android || {};
    const ios = notifee.ios || {};
    const instance = isRider ? "wasiliRider" : "wasiliDriver";
    const notification = await firebase[instance]
      .messaging()
      .sendEachForMulticast({
        tokens,
        data: {
          data: JSON.stringify({
            ...data,
            notifee: {
              title,
              body,
              data,
              android: {
                channelId: "default",
                smallIcon: "notification_icon",
                pressAction: {
                  id: "default",
                },
                ...android,
              },
              ios: {
                sound: "notification.wav",
                ...ios
              },
              ...notifee,
            },
          }),
        },
        apns: {
          payload: {
            aps: {
              contentAvailable: true
            }
          },
          headers: {
            'apns-push-type': 'background',
            'apns-priority': '5',
          },
        },
        ...moreOptions,
      });
      handleNotificationsReponsens(notification.responses, isRider)
//     console.log(notification.responses[0])
    return false;
    // await Promise.all(tokens.map(async token => {
    //           try {
    //                     const res = await axios.post('https://exp.host/--/api/v2/push/send', {
    //                               to: token,
    //                               sound: "default",
    //                               title: title,
    //                               body: body,
    //                               data,
    //                               ...moreOptions
    //                     })
    //                     const chuck = res.data
    //                     // console.log(chuck)
    //           } catch (error) {
    //                     // console.log(error)
    //           }
    // }))
    return false;
    let notifications = [];
    for (let pushToken of tokens) {
      if (!Expo.isExpoPushToken(pushToken)) {
        console.error(`Push token ${pushToken} is not a valid Expo push token`);
        continue;
      }

      notifications.push({
        to: pushToken,
        sound: "default",
        title: title,
        body: body,
        data,
        ...moreOptions,
      });
    }

    let chunks = expo.chunkPushNotifications(notifications);

    (async () => {
      for (let chunk of chunks) {
        try {
          let receipts = await expo.sendPushNotificationsAsync(chunk);
        } catch (error) {
          console.error(error);
          // if(error.code == 'PUSH_TOO_MANY_EXPERIENCE_IDS') {
          //           sendPushNotifications(error.details['@dukizwe/psr-app'], title, body, data)
          // }
        }
      }
    })();
  } catch (error) {
    // console.log(error)
    // throw error
  }
};
