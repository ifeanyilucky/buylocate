import gsap from 'gsap';
export const fadeInUp = (node) => {
  gsap.fromTo(
    node,
    {
      y: 60,
      duration: 1,
      delay: 0.2,
      opacity: 0,
      ease: 'power3.inOut',
    },
    { y: 0, opacity: 1 }
  );
};
export const fadeInDown = (node) => {
  gsap.fromTo(
    node,
    {
      y: -60,
      duration: 1,
      delay: 0.2,
      opacity: 0,
      ease: 'power3.inOut',
    },
    { y: 0, opacity: 1 }
  );
};
export const staggerText = (node1, node2, node3, height) => {
  gsap.fromTo(
    [node1, node2, node3],
    {
      duration: 0.8,
      delay: 0.2,
      height: height,
      y: 100,
      ease: 'power3.inOut',
      opacity: 0,
    },
    { y: 0, opacity: 1, stagger: { amount: 0.5 } }
  );
};
