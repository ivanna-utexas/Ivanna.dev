import starlingLabThumbnail from "../assets/projects/StarlingLabThumbnail.png"
import SquirrelThumbnail from "../assets/projects/Squirrel++Thumbnail.png"
import BitBlastThumbnail from "../assets/projects/BitBlastThumbnail.svg"
import coAdaptiveThumbnail from "../assets/projects/coAdaptiveThumbnail.png"


export const projects = [
    {
        "id": "bitblast",
        "thumbnail": BitBlastThumbnail,
        "title": "Bit Blast",
        "Focus": "As computer architecture students, we wanted to take a dry but essential CS topic — boolean logic — and turn it into something genuinely fun. Inspired by falling-block puzzle games, the goal was to build a pick-up-and-play experience where players internalize XOR, AND, and NAND operations through gameplay rather than a textbook.",
        "Background": "Bit Blast is a falling-block puzzle game built entirely in Unity 2D using C# in under 24 hours. An 8-bit register sits at the bottom of the screen while blocks of 1–4 bits fall from the top, each labeled with a gate operation. When a block lands, it applies its operation to the register bits it touches. A live truth table updates on the side panel so players always have a reference — until they don't need it anymore. A single GameManager.cs script owns all register state, gate logic, win detection, scoring, and level progression.",
        "Description": "A falling-block puzzle game where bit-blocks drop onto an 8-bit register and perform logic gate operations on impact. Match the goal state to clear the register.",
        "Language": "C#",
        "Technology": ["Unity", "Canva"],
        "PreviewType": "iFrame",
        "PreviewSRC": "https://www.youtube.com/embed/U7ZFAjBVhXE",
        "FullScreen": "https://block-blast-but-i-need-to.study/",
        "GitHub": "https://github.com/ivanna-utexas/BitBlast"
    },
    {
        "id": "squirrel++",
        "thumbnail": SquirrelThumbnail,
        "title": "Squirrel++",
        "Focus": "I wanted to create an educational Learn-To-Code style game that teaches programming concepts through a fun, squirrel-themed interface. My goal was to make it an experience that any age could enjoy and learn from. I was inspired by block-based programming platforms like Scratch and platform based games. I merged these two ideas to create an education game that introduced fundamental programming concepts.",
        "Background": "I developed an interactive, block-based programming game using Java and Java Swing that allows players to visually construct logic-driven programs to control a character in a 2D environment. The project features a custom command system with modular components such as movement commands, conditional logic (IF / ELSE), and game-state conditions (e.g., path detection), all executed through a runtime program interpreter. I designed a drag-and-drop UI using Swing components, layered panels, and custom rendering, including dynamically editable conditional blocks that update their behavior at runtime. The game integrates collision detection, state-based player movement, and level data evaluation to support real-time decision making. This project demonstrates my experience with object-oriented design, event-driven programming, UI/UX prototyping, and building educational tools that connect visual interfaces with underlying program logic.",
        "Description": "An interactive block-based programming game where players help Otis the Squirrel navigate the 2D world.",
        "Language": "Java and Java Swing",
        "Technology": ["VSCode"],
        "PreviewType": "iFrame",
        "PreviewSRC": "https://www.youtube.com/embed/WBTOki01dh0?si=LGdZmuJEVkCgOmYZ",
        "FullScreen": "https://youtu.be/WBTOki01dh0?si=xSQnJ81gEnMwFiFn",
        "GitHub": "https://github.com/ivanna-utexas/Learn-to-Code-Squirrel/tree/main"
    },
    {
        "id": "starlingLab",
        "thumbnail": starlingLabThumbnail,
        "title": "StARLinG Lab unsupervised Learning algorithms", 
        "Focus": "We researched machine-learning-based anomaly detection for DDos attacks, comparing it to traditional signature-based intrusion detection systems (IDS). Our goal was to evaluate how well unsupervised ML Models can detect unknown (Zero-day) attacks that signature based systems might miss.",
        "Background": "Signature-based detection matches network packets to know attack signatures which is fast and accurate for known attacks but it cannot detect unknown threats. Our anomaly-based detection used machine learning to identify deviations from the normal traffic which means it can detect those unknown attacks.",
        "Description": "We built and tested three unsupervised anomaly-detection models on DDos traffic.",
        "Language": "Python",
        "Technology": ["PyCharm"],
        "PreviewType": "iFrame",
        "PreviewSRC": "https://docs.google.com/presentation/d/e/2PACX-1vSmj38O8gx9gPLR03Ql1E4td99reOfXpR4FQGydNXiHpmI6E5fqfLUEE-Zrhf0yofpKgwfWgYQuEulv/pubembed?start=true&loop=true&delayms=3000",
        "FullScreen": "https://docs.google.com/presentation/d/e/2PACX-1vSmj38O8gx9gPLR03Ql1E4td99reOfXpR4FQGydNXiHpmI6E5fqfLUEE-Zrhf0yofpKgwfWgYQuEulv/pub?start=false&loop=false&delayms=3000",
        "src": "starlingLab",
        "GitHub": "https://docs.google.com/presentation/d/e/2PACX-1vSmj38O8gx9gPLR03Ql1E4td99reOfXpR4FQGydNXiHpmI6E5fqfLUEE-Zrhf0yofpKgwfWgYQuEulv/pub?start=true&loop=true&delayms=3000&slide=id.g279d83b97fc_2_2638"
    },
    {
        "id": "coAdaptiveAV",
        "thumbnail": coAdaptiveThumbnail,
        "title": "Co-Adaptive Value Alignment for Autonomous Vehicles",
        "Focus": "We built a co-adaptive reinforcement learning framework that trains an autonomous vehicle agent to align its driving behavior with a simulated passenger's hidden comfort state — without requiring a real human in the loop.",
        "Background": "Traditional AV systems optimize for speed and task completion but treat human preferences as static. Real passenger comfort is dynamic and shaped by the vehicle's own actions. Our framework closes this loop by using an LLM as a proxy human judge, scoring each driving episode and feeding that score back into the RL reward signal.",
        "Description": "A reinforcement learning agent trained in Unity that adapts its driving behavior in real time to a simulated passenger's comfort state, scored episode-by-episode by a Qwen2.5 LLM.",
        "Language": "Python",
        "Technology": ["Unity", "PPO (Stable-Baselines3)", "Qwen2.5 LLM", "DonkeyCar", "TACC", "PyTorch"],
        "PreviewType": "iFrame",
        "PreviewSRC": "https://docs.google.com/presentation/d/1EbW1urK89alr9ngvP8vyQhW1FwTdVDgT/embed?start=true&loop=true&delayms=3000",
        "FullScreen": "https://docs.google.com/presentation/d/e/2PACX-1vTiPSoUEc3WCis0AaytZx1MduCGma86ZbbIyo6-iCZyB73eixY5KLuu_Ph6iLNAEg/pub?start=false&loop=false&delayms=3000",
        "src": "coAdaptiveAV",
        "GitHub": "https://github.com/Spacewalker215/simulator"
    }
]