import quiz from '../src/assets/quiz.png'
import sakti_masai from '../src/assets/sakti_masai.jpg'
import weworkui from '../src/assets/weworkui.png'
import admin_ui from '../src/assets/admin_ui.png'
import ecommerce from '../src/assets/ecommerce.png'
import tictactoe from '../src/assets/tictactoe.png'

type data = {
    languages: languages[] 
    key_points : string[]
    skills : skills[],
    soft_skills : string[],
    projects : projects[],
    education :education[],
}

type education ={
    name :string,
    college :string,
    duration :string
    achievements:string[]
    certificate:string
}

type languages = {
    text : string,
    percent : number
}

type skills = {
    skill : string,
    percent : number
}

type projects = {
    img : string,
    name : string,
    desc : string,
    tech_stack : string[],
    features : string[],
    live:string,
    github : string,
    tag:string
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
    projects:[
        {
            name : "React Quiz App",
            desc : "This is a Simple React Quiz App with time bound and mobile first approach",
            img : quiz,
            tech_stack :[
                "HTML","CSS","React" , "Chakra UI", "Type Script"
            ],
            features : [
                "Mobile First Approach",
                "Responsive",
                "Time Bound",
                "3 screens - Home,Quiz,Score"
            ],
            live:"https://quiz-app-dr11.vercel.app/",
            github:"https://github.com/sakti8093/quiz-app",
            tag:"Frontend"
        },
        {
            name : "Responsive Modern UI",
            desc : "This is a static modern dashboard build with next js and typescript",
            img : weworkui,
            tech_stack :[
                "HTML","CSS","Next Js" , "Figma","Type Script"
            ],
            features : [
                "Responsive (ipad mini and mobile)",
            ],
            live:"https://wework-ex0uxde09-sakti8093.vercel.app/",
            github:"https://github.com/sakti8093/wework-ui",
            tag:"Front end"
        },
        {
            name : "Ecommerce App",
            desc : "This is a e-commerce react app with all basic functionality of ecommerce",
            img : ecommerce,
            tech_stack :[
                "HTML","CSS","React" , "Chakra UI","Node js","express js","Context API"
            ],
            features : [
                "Responsive",
                "Sign up --> log in --> cart --> checkout",
                "Personalized Cart",
                "sorting and filtering"
            ],
            github:"https://github.com/sakti8093/Tenner-Goods-Clone",
            live:"https://tender-goods-clone-sakti.netlify.app/",
            tag:"Full stack"
        },
        {
            name : "Tic-Tac-Toe",
            desc : "This is the epic Tic-Tac-Toe multiplayer game build using React js ",
            img : tictactoe,
            tech_stack :[
                "HTML","CSS","JS","React"
            ],
            features : [
                "Responsive",
                "Multiplayer",
                "Music Enabled"
            ],
            github:"https://github.com/sakti8093/Tic-Tac-Toe",
            live:"https://app.netlify.com/sites/tic-tac-toe-sakti/overview",
            tag:"Frontend"
        },
        {
            name : "Admin UI (by geektrust)",
            desc : "This is a admin ui page with all admin UI features like delete , edit,mark,search",
            img : admin_ui,
            tech_stack :[
                "HTML","CSS","React" ,"JS",
            ],
            features : [
               "Searching",
               "Edit",
               "Delete",
               "Mark and Delete",
               "Pagination"
            ],
            github:"https://github.com/sakti8093/geektrust-assignments/tree/main/Admin-ui",
            live:"https://sakti-admin-ui-geektrust.netlify.app/",
            tag:"frontend"
        },
    ],
    education : [
        {
            name :"Full Stack developer course",
            college:"Masai School",
            duration :"March 2022 - Dec 2022 (8 months) ",
            achievements:[
                "Cleared all units in 1 attempt",
                "Involved in 3 collabrative Projects"
            ],
            certificate:sakti_masai
        },
        {
            name :"Btech in Automobile Engineering",
            college:"Parala Maharaja Engineerin College",
            duration :"Aug 2019 - Aug 2022",
            achievements:[
                "Secured 9.24 CGPA",
                "Awarded as Branch Topper"
            ],
            certificate:sakti_masai
        },
        {
            name:"Diploma in Mechanical Engineering",
            college:"Govt Polytechnic,Bhubaneswar",
            duration:"Aug 2016 - Aug 2019",
            achievements :[
                "Secured 75% in Academcs",
                "within top 10 rankers"
            ],
            certificate:sakti_masai
        },
        {
            name:"Schooling till Matriculation",
            college:"Kendriya Vidyalaya Np. 1,Bhubaneswar",
            duration:"Aug 2005 - Aug 2015",
            achievements :[
                "Secured 8.2 CGPA in Academcs",
            ],
            certificate:sakti_masai
        }
    ]

}
export default data