/// <reference lib="WebWorker" />

import { RemixNavigationHandler } from "@remix-pwa/sw";

export type {};
declare let self: ServiceWorkerGlobalScope;

const ASSETS = "asset-cache";
const DOCUMENTS = "page-cache";
const DATA = "data-cache";
const STATIC_ASSETS = ["/build/", "/icons/", "/favicon.ico"];

const messageHandler = new RemixNavigationHandler({
  dataCacheName: DATA,
  documentCacheName: DOCUMENTS,
});

self.addEventListener("install", (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request.clone()));
});

self.addEventListener("message", (event) => {
  event.waitUntil(messageHandler.handle(event));
});

/******** Push Event ********/
class PushHandler extends Push {
  async handlePush(event: PushEvent): Promise<void> {}

  async handleNotificationClick(event: NotificationEvent): Promise<void> {}

  async handleNotificationClose(event: NotificationEvent): Promise<void> {}

  async handleError(error: ErrorEvent): Promise<void> {}
}

const pushHandler = new PushHandler();

self.addEventListener("push", (event: PushEvent) => {
  pushHandler.handlePush(event);
});

self.addEventListener("notificationclick", (event: NotificationEvent) => {
  pushHandler.handleNotificationClick(event);
});

self.addEventListener("notificationclose", (event: NotificationEvent) => {
  pushHandler.handleNotificationClose(event);
});

self.addEventListener("error", (error: ErrorEvent) => {
  pushHandler.handleError(error);
});
