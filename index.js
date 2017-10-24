function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  let list = document.querySelectorAll('ul.ranked-list li')

  for(let i = 0; i < list.length; i++){
    list[i].innerHTML = (parseInt(list[i].innerHTML, 10) + n).toString()
  }
  return list;
}

function deepestChild(){
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }

  return node
}
