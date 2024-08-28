document.addEventListener("DOMContentLoaded", function() {
    fetch('webinars.json')
        .then(response => response.json())
        .then(data => {
            // Shuffle the array of courses
            for (let i = data.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [data[i], data[j]] = [data[j], data[i]];
            }

            // Select the first 3 courses
            const selectedCourses = data.slice(0, 3);

            // Generate HTML for each course
            const courseContainer = document.getElementById("courseContainer");
            selectedCourses.forEach(course => {
                const courseElement = document.createElement("div");
                courseElement.className = "col-xl-4 col-md-6 col-12 wow fadeIn single-course-wrapper";
                courseElement.innerHTML = `
                    <div class="single-course">
                        <div class="course-img">
                            <img src="${course.image}" alt="course image">
                        </div>
                        <div class="course_content">
                            <div class="crating">
                                <a href="#">
                                    <i class="bx bxs-star"></i>
                                    <i class="bx bxs-star"></i>
                                    <i class="bx bxs-star"></i>
                                    <i class="bx bxs-star"></i>
                                    <i class="bx bxs-star"></i>
                                </a>
                            </div>
                            <h2><a href="${course.link}">${course.title}</a></h2>
                        </div>
                    </div>
                `;
                courseContainer.appendChild(courseElement);
            });
        })
        .catch(error => console.error('Error loading courses:', error));
});