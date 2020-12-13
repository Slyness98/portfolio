// import React, {useEffect} from 'react';
// import gsap from 'gsap';
// import { useIntersection } from 'react-use';

// // const WithScrollAnim = ({threshold, ...props }) => {
// //   const sectionRef = React.useRef(null);
// //   const intersection = useIntersection(sectionRef, {
// //     root: null,
// //     rootMargin: '0px',
// //     threshold: threshold
// //   });

// //   const fadeIn = () => {
// //     gsap.to(sectionRef, {
// //       opacity: 1,
// //       duration: 1.25,
// //       y: -60,
// //       ease: "power4.out",
// //       stagger: {
// //         amount: 0.3
// //       }
// //     });
// //   };

// //   const fadeOut = () => {
// //     gsap.to(sectionRef, {
// //       opacity: 0,
// //       duration: 1.25,
// //       y: -20,
// //       ease: "power4.out"
// //     });
// //   };

// //   useEffect(() => {
// //     intersection && intersection.intersectionRatio < threshold
// //       ? fadeOut(sectionRef)
// //       : fadeIn(sectionRef)
// //   }, [intersection, fadeIn, fadeOut]);

// //   return (
// //    <WrappedComponent ref={props.ref} {...props}/>
// //   )
// // };


// const WithScrollAnim = React.forwardRef((props, ref) => {
//     // const sectionRef = React.useRef(null);
//     const intersection = useIntersection(ref, {
//       root: null,
//       rootMargin: '0px',
//       threshold: threshold
//     });
  
//     const fadeIn = () => {
//       gsap.to(ref, {
//         opacity: 1,
//         duration: 1.25,
//         y: -60,
//         ease: "power4.out",
//         stagger: {
//           amount: 0.3
//         }
//       });
//     };
  
//     const fadeOut = () => {
//       gsap.to(ref, {
//         opacity: 0,
//         duration: 1.25,
//         y: -20,
//         ease: "power4.out"
//       });
//     };
  
//     useEffect(() => {
//       intersection && intersection.intersectionRatio < threshold
//         ? fadeOut(ref)
//         : fadeIn(ref)
//     }, [intersection, fadeIn, fadeOut]);
  
//     return (
//      <WrappedComponent ref={ref} {...props}/>
//     )
// });
// export default WithScrollAnim;