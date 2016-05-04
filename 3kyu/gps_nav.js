// source: http://www.codewars.com/kata/gps-navigation/javascript

function navigate (numberOfIntersections, roads, start, finish) {
  var times = { currentTime: 0, fastestTime: Number.MAX_VALUE },
    paths = { currentPath: [], fastestPath: [] }

  if (start === finish) {
    return [start]
  } else if (!checkRoads()) {
    return null
  } else {
    findPaths(numberOfIntersections, roads, start, finish)
    return paths.fastestPath
  }

  function findPaths (numberOfIntersections, roads, start, finish) {

    if (times.currentTime > times.fastestTime) return

    var startPaths = roads.filter((road) => {
      return road.from === start
    })

    for (var i = 0; i < startPaths.length; i++) {
      var path = startPaths[i]

      if (paths.currentPath.indexOf(path.from) === -1) {
        paths.currentPath.push(path.from)
      }
      times.currentTime += path.drivingTime

      if (path.to !== finish && numberOfIntersections > 0) {
        if (paths.currentPath.indexOf(path.to) !== -1) {
          times.currentTime -= path.drivingTime
          continue
        }
        findPaths(numberOfIntersections - 1, roads, path.to, finish)
      } else {
        paths.currentPath.push(path.to)
        if (deepEqual(paths.currentPath, [0, 2, 5, 4])) {
        }
        if (times.currentTime < times.fastestTime) {
          times.fastestTime = times.currentTime
          paths.fastestPath = paths.currentPath.slice(0)
        }
      }
      paths.currentPath.pop()
      times.currentTime -= path.drivingTime
    }
  }

  function checkRoads () {
    return finish <= roads.map((road) => {
      return road.to
    }).reduce((prevRoadTo, currRoadTo) => {
      return prevRoadTo < currRoadTo ? currRoadTo : prevRoadTo
    })
  }
}

function deepEqual (arr1, arr2) {
  return arr2.length === arr1.filter((el, index) => {
    return el === arr2[index]
  }).length
}


