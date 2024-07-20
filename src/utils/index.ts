const formatItem = (obj: any) => {
  const { title, average_price } = obj

  return {
    name: title, // 小区的名字
    averagePrice: average_price // 平均价格
  }
}

interface IItem {
  name: string
  averagePrice: string
}

const formatList = (list: Array<any>) => {
  const ret: Array<IItem> = []
  for (let i = 0; i < list.length; i++) {
    const item = formatItem(list[i])
    ret.push(item)
  }

  return ret
}

export { formatList }
