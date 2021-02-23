const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
  ]

function superbowlWin(record) {
    const season = record.find( season => season.result === "W")
    return !!season ? season.year : undefined
}