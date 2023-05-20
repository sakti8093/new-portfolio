type data = {
    languages: languages[] 
    key_points : string[]
    skills : skills[],
    soft_skills : string[],
}

type languages = {
    text : string,
    percent : number
}

type skills = {
    skill : string,
    percent : number
}

const data : data = {
    languages : [
        {
            text : 'Hindi',
            percent : 100
        },
        {
            text : 'English',
            percent : 75,
        },
        {
            text : 'Odia',
            percent : 90
        }
    ],
    key_points :[
        "React , Redux ,RTK",
        "Material UI , Chakra UI , Ant Design",
        "Tailwind CSS ,React Bootstrap",
        "Node Js,Express JS",
        "Mongo DB , MySQL",
        "HTML , CSS",
        "Java Script , Java",
        "Git , Github"
    ],
    skills : [
        {
            skill:'HTML/CSS',
            percent : 80
        },
        {
            skill:'REACT',
            percent : 80
        },
        {
            skill:'JS',
            percent : 70
        },
        {
            skill:'NODE JS',
            percent : 65
        },{
            skill:'DATABASE ( Mongo DB / MySql )',
            percent : 75
        }
    ],
    soft_skills :[
        "Communicating",
        "Goal Oriented",
        "Flexible",
        "Punctual",
        "Dedicated",
        "Focused"
    ],

}
export default data