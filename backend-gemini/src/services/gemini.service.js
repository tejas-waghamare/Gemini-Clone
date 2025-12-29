import { GoogleGenAI } from "@google/genai";
import { marked } from "marked";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
    throw new Error("GEMINI_API_KEY is not set");
}

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

export const getGeminiResponse = async (question) => {
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: [{ role: "user", parts: [{ text: question }] }],
        });

        const parsedResponse = marked.parse(response.response.text());
        return parsedResponse;
    } catch (error) {
        console.error("Error getting Gemini response:", error);
        throw new Error("Failed to get response from Gemini: " + error.message);
    }
};