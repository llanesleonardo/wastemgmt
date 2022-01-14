import { getConnectionOptions, createConnection } from 'typeorm'

export const createTypeORMConnection = async () => {
  const connectionOptions = await getConnectionOptions('development')
  await createConnection({ ...connectionOptions, name: 'default' })
}
