import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'veushuon',
    dataset: 'production'
  },
  deployment: {
    appId: 'vqsw2uuteslnv64nuj5h1go0',
    autoUpdates: true,
  }
})
