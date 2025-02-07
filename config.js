export const config = {
  connectorName: 'Groq Connector',
  connectorVersion: '1.0.1',
  models: [
    // Production Models
    'distil-whisper-large-v3-en',
    'gemma2-9b-it',
    'llama-3.3-70b-versatile',
    'llama-3.1-8b-instant',
    'llama-guard-3-8b',
    'llama3-70b-8192',
    'llama3-8b-8192',
    'mixtral-8x7b-32768',
    // Preview Models
    'deepseek-r1-distill-llama-70b-specdec',
    'deepseek-r1-distill-llama-70b',
    'llama-3.3-70b-specdec',
    'llama-3.2-1b-preview',
    'llama-3.2-3b-preview',
    'llama-3.2-11b-vision-preview',
    'llama-3.2-90b-vision-preview'
  ],
  description:
    'This is a connector for Prompt Mixer that allows you to access the Groq API and utilize their powerful LLM models directly within Prompt Mixer.',
  author: 'Prompt Mixer',
  properties: [
    {
      id: 'prompt',
      name: 'System Prompt',
      value: 'You are a helpful assistant.',
      type: 'string',
    },
    {
      id: 'max_tokens',
      name: 'Max Tokens',
      value: 4096,
      type: 'number',
    },
    {
      id: 'temperature',
      name: 'Temperature',
      value: 0.7,
      type: 'number',
    },
    {
      id: 'top_p',
      name: 'Top P',
      value: 1,
      type: 'number',
    },
  ],
  settings: [
    {
      id: 'API_KEY',
      name: 'API Key',
      value: '',
      type: 'string',
    },
  ],
  iconBase64:
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTguMDAwNzQgMS41QzUuNTQ2NDIgMS41IDMuNTQ5OTQgMy40OTY0NyAzLjU0OTk0IDUuOTUwNTVDMy41NDk5NCA4LjQwNDYzIDUuNTQ2NDIgMTAuNDAxNCA4LjAwMDc0IDEwLjQwMTRIOS40NjQ0OFY4LjczMjI0SDguMDAwNzRDNi40NjY4OCA4LjczMjI0IDUuMjE5MDYgNy40ODQ0MSA1LjIxOTA2IDUuOTUwNTVDNS4yMTkwNiA0LjQxNjY5IDYuNDY2ODggMy4xNjg4NiA4LjAwMDc0IDMuMTY4ODZDOS41MzQ2MSAzLjE2ODg2IDEwLjc4ODkgNC40MTY2OSAxMC43ODg5IDUuOTUwNTVWMTAuMDQ5NEMxMC43ODg5IDExLjU3MzMgOS41NDgxMyAxMi44MTQ0IDguMDI4MDUgMTIuODMwNEM3LjMwMDY5IDEyLjgyNDQgNi42MDUxNCAxMi41MzIxIDYuMDkyMTggMTIuMDE2NEw0LjkxMTk4IDEzLjE5NjZDNS43MzAwMSAxNC4wMTg5IDYuODM4MzMgMTQuNDg2NyA3Ljk5Nzk5IDE0LjQ5OTJWMTQuNUM4LjAwODAxIDE0LjUgOC4wMTgwMyAxNC41IDguMDI3OCAxNC41SDguMDU5MVYxNC40OTkyQzEwLjQ3ODQgMTQuNDY2NCAxMi40MzczIDEyLjQ5NDMgMTIuNDQ4NSAxMC4wNjk1TDEyLjQ1IDUuODQxMzVDMTIuMzkxOSAzLjQzNzg3IDEwLjQxODMgMS41IDguMDAwNzQgMS41WiIgZmlsbD0iIzZGNzM3QSIvPgo8L3N2Zz4K',
};
