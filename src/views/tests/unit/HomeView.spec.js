/* eslint-disable no-unused-vars */
import HomeView from "@/views/HomeView.vue";
import firebaseConfig from "../../../firebase-config";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { render } from "@testing-library/vue";
import { setActivePinia, createPinia } from "pinia";

jest.mock("firebase/auth", () => {
  return {
    getAuth: jest.fn(),
    onAuthStateChanged: jest.fn(),
    GoogleAuthProvider: jest.fn(),
  };
});

describe("HomeView.vue", () => {});
