export function getAPIs(args: Array<any>) {
  const searching = {
    dev_to: args.slice(1).toString().replace(" ", "%20"),
    coronavirus_19: args.toString()
  }
  const APIs = [
    {name:"dev_to", url:`https://dev.to/api/articles?tag=${searching.dev_to}`},
    {name:"coronavirus_19", url:`https://coronavirus-19-api.herokuapp.com/countries/${searching.coronavirus_19}`},
    {name:"image_charts", url:`https://image-charts.com/chart?cht=p3&chs=300x300${args[0]}${args[1]}`},
    {name:"newsAPI", url:`https://newsapi.org/v2/${args[0]}`},
    {name:"mediaStack", url:`http://api.mediastack.com/v1/${args[0]}`}
  ]

  return {searching,APIs}
}