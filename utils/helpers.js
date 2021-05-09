import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Notifications from "expo-notifications";

const NOTIFICATION_KEY = "MobileFlashcards:notifications";

/**
 * Formats noun
 * @param {number} count word's occurence
 * @param {string} word word(noun) to format
 * @returns formatted word (e.g.: 1 word, 2 words, No words)
 */
export function formatNoun(count, word) {
  _count = count === 0 ? "No" : count;
  _word = count === 1 ? word : word + "s";
  return _count + " " + _word;
}

/** Clears all scheduled notifications */
export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync
  );
}

/** Sets new notification */
export function setLocalNotification() {
  Notifications.getAllScheduledNotificationsAsync().then((results) => {
    console.log(results);
  });
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      console.log(data);
      if (data === null) {
        Notifications.requestPermissionsAsync().then(({ status }) => {
          if (status === "granted") {
            Notifications.cancelAllScheduledNotificationsAsync();
            Notifications.scheduleNotificationAsync({
              content: {
                title: "Do a quiz",
                body: "Don't forget to quiz yourself today!",
                sound: true,
                vibrate: true,
              },
              trigger: {
                hour: 9,
                minute: 0,
                repeats: true,
              },
            });
            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
          }
        });
      }
    });
}
