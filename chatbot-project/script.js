function sendMessage() {
    const userInput = document.getElementById("userInput").value;
    const chatbox = document.getElementById("chatbox");

    if (userInput.trim() !== "") {
        // Display user message
        const userMessageDiv = document.createElement("div");
        userMessageDiv.classList.add("user-message");
        userMessageDiv.textContent = userInput;
        chatbox.appendChild(userMessageDiv);

        // Get bot response
        const botResponse = getBotResponse(userInput);
        
        // Display bot message
        const botMessageDiv = document.createElement("div");
        botMessageDiv.classList.add("bot-message");
        botMessageDiv.textContent = botResponse;
        chatbox.appendChild(botMessageDiv);

        // Clear user input
        document.getElementById("userInput").value = "";

        // Scroll to the bottom
        chatbox.scrollTop = chatbox.scrollHeight;
    }
}



function getBotResponse(input) {
    const lowerInput = input.toLowerCase();

    if (lowerInput.includes("admission")) {
        return "You can apply for admission to the college through our website. Please visit the 'Admissions' section for more details on how to apply.";
    } else if (lowerInput.includes("courses")) {
        return "We offer a variety of undergraduate and postgraduate courses in multiple fields including Computer Science, Engineering, Arts, and Sciences. Please check our 'Courses' section for a full list.";
    } else if (lowerInput.includes("faculty")) {
        return "Our faculty consists of experienced professors and industry experts in various fields. For more information about the faculty, please visit the 'Faculty' page.";
    } else if (lowerInput.includes("fees")) {
        return "The fee structure is available in the 'Fees and Scholarships' section of our website. We also offer financial aid and scholarships to deserving students.";
    } else if (lowerInput.includes("campus")) {
        return "Our campus is spread over 50 acres and is equipped with modern facilities like libraries, sports complexes, hostels, and state-of-the-art classrooms. Check out the 'Campus' section for more details.";
    } else if (lowerInput.includes("scholarships")) {
        return "We offer several scholarships based on merit and need. You can apply for scholarships while filling out your admission form or after being admitted.";
    } else if (lowerInput.includes("events")) {
        return "Our college regularly hosts cultural events, tech fests, and sports tournaments. For upcoming events, visit the 'Events' page on our website.";
    } else if (lowerInput.includes("library")) {
        return "Our library is well-stocked with books, journals, and digital resources. It is open to all students from 8 AM to 8 PM every day.";
    } else if (lowerInput.includes("sports")) {
        return "We have a fully equipped sports complex, with facilities for cricket, football, basketball, and more. Students are encouraged to participate in sports activities.";
    } else if (lowerInput.includes("hostels")) {
        return "We have separate hostels for boys and girls with 24/7 security, Wi-Fi, and meals. For more information, visit the 'Hostels' section on our website.";
    } else if (lowerInput.includes("placements")) {
        return "Our placement cell works with top companies to provide excellent job opportunities for our students. You can find more information in the 'Placements' section.";
    } else if (lowerInput.includes("research")) {
        return "Our college is involved in cutting-edge research in multiple fields. Students and faculty collaborate on projects funded by national and international organizations. Visit the 'Research' page for details.";
    } else if (lowerInput.includes("part-time courses")) {
        return "Yes, we offer part-time and online courses in several disciplines. Check out the 'Part-Time Courses' section for more information.";
    } else if (lowerInput.includes("internships")) {
        return "Our college provides ample internship opportunities through collaborations with top companies and organizations. The 'Internships' section has more information.";
    } else if (lowerInput.includes("cafeteria")) {
        return "Our campus has a variety of food options available in the cafeteria, offering meals, snacks, and beverages to suit different tastes.";
    } else if (lowerInput.includes("transportation")) {
        return "We provide transportation facilities for students and staff, covering major locations in the city. Visit the 'Transport' section for routes and schedules.";
    } else if (lowerInput.includes("alumni")) {
        return "Our alumni network is vast and active, with members excelling in various industries globally. Visit the 'Alumni' section to learn more.";
    } else if (lowerInput.includes("clubs")) {
        return "We have various student clubs focused on interests like robotics, arts, entrepreneurship, and sports. Explore our 'Clubs' section to find your fit.";
    } else if (lowerInput.includes("laboratories")) {
        return "Our labs are equipped with modern technology to support research and learning across various disciplines. Visit the 'Facilities' page for more details.";
    } else if (lowerInput.includes("financial aid")) {
        return "We offer financial aid packages and work-study options to support students in need. Visit the 'Financial Aid' section for more information.";
    } else if (lowerInput.includes("accommodation")) {
        return "Accommodation options include well-maintained hostels and nearby rental apartments. Visit the 'Accommodation' page for more details.";
    } else if (lowerInput.includes("counseling")) {
        return "Our counseling center provides support for academic, personal, and career-related concerns. You can schedule an appointment through our website.";
    } else if (lowerInput.includes("international students")) {
        return "We welcome students from around the world and offer dedicated support services for international students. Visit the 'International Students' section for details.";
    } else if (lowerInput.includes("exam dates")) {
        return "Exam schedules are published on the 'Examinations' page. Please check there for the latest updates.";
    } else if (lowerInput.includes("results")) {
        return "Results are announced online and can be accessed through the 'Student Portal' using your login credentials.";
    } else if (lowerInput.includes("study abroad")) {
        return "We have partnerships with universities worldwide for study abroad programs. Visit the 'International Programs' section for more information.";
    } else if (lowerInput.includes("festivals")) {
        return "We celebrate a variety of festivals and cultural events on campus to promote diversity and inclusivity. Join us for the upcoming festivities!";
    } else if (lowerInput.includes("workshops")) {
        return "We organize workshops on trending topics like AI, blockchain, and entrepreneurship. Check the 'Workshops' section for updates.";
    } else if (lowerInput.includes("certification courses")) {
        return "We offer short-term certification courses in areas like data science, digital marketing, and more. Visit the 'Certifications' page for details.";
    } else if (lowerInput.includes("industry collaborations")) {
        return "Our college collaborates with leading industries to provide real-world experience and internships. Visit the 'Industry Partnerships' section to learn more.";
    } else if (lowerInput.includes("guest lectures")) {
        return "We host guest lectures by industry leaders and academicians regularly. Stay updated through the 'Events' page.";
    } else if (lowerInput.includes("mentorship")) {
        return "Our mentorship programs connect students with experienced mentors to guide their academic and career journeys.";
    } else if (lowerInput.includes("work-study")) {
        return "Work-study programs allow students to earn while they learn. Visit the 'Work-Study' section for eligibility criteria and available roles.";
    } else if (lowerInput.includes("environment")) {
        return "Our campus promotes sustainability through green initiatives like recycling, solar energy, and eco-friendly buildings.";
    } else if (lowerInput.includes("language courses")) {
        return "We offer language courses such as French, German, and Mandarin to enhance global communication skills.";
    } else if (lowerInput.includes("art gallery")) {
        return "Our art gallery showcases the creative talents of students and professionals. Visit the 'Art & Culture' section to learn more.";
    } else if (lowerInput.includes("robotics")) {
        return "Our robotics club is open to students interested in building and programming robots. Join us for exciting projects and competitions!";
    } else if (lowerInput.includes("volunteering")) {
        return "We encourage students to engage in community service through volunteering programs. Check the 'Social Initiatives' section for opportunities.";
    } else if (lowerInput.includes("career guidance")) {
        return "Our career guidance cell offers resume building, interview preparation, and career counseling services. Visit the 'Career Services' page for details.";
    } else if (lowerInput.includes("startup support")) {
        return "We provide startup incubation and funding opportunities for aspiring entrepreneurs. Visit the 'Startup Hub' section to learn more.";
    } else if (lowerInput.includes("online learning")) {
        return "Our online learning platform offers flexibility for students to access course materials and live sessions remotely.";
    } else if (lowerInput.includes("hello") || lowerInput.includes("hi") || lowerInput.includes("hey")) {
        return "Hello! How can I assist you today? You can ask about admissions, courses, events, scholarships, and more!";
    } else if (lowerInput.includes("thank you") || lowerInput.includes("thanks")) {
        return "You're welcome! Feel free to ask if you have more questions.";
    } else if (lowerInput.includes("bye")) {
        return "Goodbye! Have a great day. Feel free to reach out again if you have any questions.";
    } else {
        return "Sorry, I didn't quite catch that. You can ask about admissions, courses, events, scholarships, and more!";
    }
}





