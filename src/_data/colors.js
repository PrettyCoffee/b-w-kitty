import * as material from 'material-colors'

const c = [
    "blueGrey",
    "red",
    "pink",
    "purple",
    "deepPurple",
    "indigo",
    "blue",
    "lightBlue",
    "cyan",
    "teal",
    "green",
    "lightGreen",
    "lime",
    "yellow",
    "amber",
    "orange",
    "deepOrange",
    "brown"
]
export function getColors() {
    console.log(material)
    var result = [[
        "rgba(46,46,46,1)",
        "rgba(230,230,230,1)",
        "rgba(50,200,150,.3)",
        "rgba(200,50,50,.3)"
    ],[
        "rgba(0,0,0,1)",
        "rgba(60,60,60,1)",
        "rgba(120,120,120,1)",
        "rgba(180,180,180,1)",
        "rgba(250,250,250,1)"
    ]]
    c.forEach((color)=>{
        result.push([
            material[color][900],
            material[color][700],
            material[color][500],
            material[color][300],
            material[color][100]
        ])
    })

    return result
}