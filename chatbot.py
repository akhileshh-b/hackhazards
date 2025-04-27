import os
import requests
import json

# Initialize API key
GROQ_API_KEY = "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"
API_URL = "https://api.groq.com/openai/v1/chat/completions"

# Headers for API requests
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {GROQ_API_KEY}"
}

# Set the system prompt
system_prompt = {
    "role": "system",
    "content": "You are a helpful assistant. You reply with very short answers."
}

# Initialize the chat history
chat_history = [system_prompt]

def clear_terminal():
    os.system('cls' if os.name == 'nt' else 'clear')

def get_completion(messages):
    data = {
        "model": "llama-3.3-70b-versatile",
        "messages": messages,
        "max_tokens": 100,
        "temperature": 1.2
    }
    
    try:
        response = requests.post(API_URL, headers=headers, json=data)
        response.raise_for_status()  # Raise an exception for bad status codes
        return response.json()["choices"][0]["message"]["content"]
    except requests.exceptions.RequestException as e:
        print(f"\nAPI Error: {str(e)}")
        return None

print("Welcome to the Groq Chatbot! Type 'quit' to exit.")
print("-" * 50)

while True:
    try:
        # Get user input from the console
        user_input = input("\nYou: ").strip()
        
        if user_input.lower() == 'quit':
            print("\nGoodbye!")
            break
            
        if not user_input:
            continue

        # Append the user input to the chat history
        chat_history.append({"role": "user", "content": user_input})

        # Get response from Groq
        assistant_response = get_completion(chat_history)
        
        if assistant_response:
            print("\nAssistant:", assistant_response)
            # Append the response to the chat history
            chat_history.append({
                "role": "assistant",
                "content": assistant_response
            })
        else:
            print("\nFailed to get response. Please try again.")

    except Exception as e:
        print(f"\nError occurred: {str(e)}")
        print("Please try again.") 