export const delay = async (ms = 500): Promise<any> => {
  return await new Promise((resolve) => setTimeout(resolve, ms))
}
