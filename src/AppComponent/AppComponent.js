
// // Draft #1
// import 'bulma/css/bulma.min.css'
// import ProfileCard from './ProfileCard';
// import AlexaImage from './images/alexa.png';
// import CortanaImage from './images/cortana.png';
// import SiriImage from './images/siri.png';
//
// function AppComponent() {
//     return (
//         <div>
//
//             <section className="hero is-primary">
//                 <div className="hero-body">
//                     <p className="title">Personal Digital Assistants</p>
//                 </div>
//             </section>
//
//             <div className='container'>
//                 <div className="columns">
//                     <div className="column is-4">
//                         <ProfileCard
//                             title="Alex"
//                             handle="@alexa99"
//                             image={AlexaImage}
//                             description="Alexa is make by Amazon, it is cold todays jhkfjhsdf skjfdhs "
//                         />
//                     </div>
//
//                     <div className="column is-4">
//                         <ProfileCard
//                             title="Cortana"
//                             handle="@cortana32"
//                             image={CortanaImage}
//                             description="Cortana is make by Microsoft, sdhfs skdjfhk sdf ksjdfh kjsdhf "
//                         />
//                     </div>
//
//                     <div className="column is-4">
//                         <ProfileCard
//                             title="Siri"
//                             handle="@siri01"
//                             image={SiriImage}
//                             description="Siri is make by Apple, ksjdhfsd ksjdhfskjdhf skjdfhskdjfh sdf kjsdhf "
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
// export default AppComponent



// // Draft #2
// import 'bulma/css/bulma.min.css'
// import ProfileCard from './ProfileCard';
// import AlexaImage from './images/alexa.png';
// import CortanaImage from './images/cortana.png';
// import SiriImage from './images/siri.png';
// function App() {
//     const data = [
//         {
//             title:"Alex",
//             handle:"@alexa99",
//             image:AlexaImage,
//             description:"Alexa is make by Amazon, it is cold todays jhkfjhsdf skjfdhs "
//         },
//         {
//             title:"Cortana",
//             handle:"@cortana32",
//             image:CortanaImage,
//             description:"Cortana is make by Microsoft, sdhfs skdjfhk sdf ksjdfh kjsdhf "
//         },
//         {
//             title:"Siri",
//             handle:"@siri01",
//             image:SiriImage,
//             description:"Siri is make by Apple, ksjdhfsd ksjdhfskjdhf skjdfhskdjfh sdf kjsdhf "
//         }
//     ];
//
//     const items = data.map(item =>
//         <div className="column is-4">
//             <ProfileCard
//                 title={item.title}
//                 handle={item.handle}
//                 image={item.image}
//                 description={item.description}
//             />
//         </div>
//     );
//
//     return (
//         <div>
//             <section className="hero is-primary">
//                 <div className="hero-body">
//                     <p className="title">Personal Digital Assistants</p>
//                 </div>
//             </section>
//
//             <div className='container'>
//                 <div className="columns">
//                     {items}
//                 </div>
//             </div>
//         </div>
//     );
// }
//
// export default App







// Draft #3
import 'bulma/css/bulma.min.css'
import {data} from './data';
import ProfileCard from './ProfileCard';
function App() {
    const items = data.map((item, index) =>
        <div className="column is-4" key={index}>
            <ProfileCard
                title={item.title}
                handle={item.handle}
                image={item.image}
                description={item.description}
            />
        </div>
    );

    return (
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">Personal Digital Assistants</p>
                </div>
            </section>

            <div className='container'>
                <div className="columns">
                    {items}
                </div>
            </div>
        </div>
    );
}

export default App
