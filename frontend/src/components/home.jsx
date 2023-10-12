import React from "react";

function Home() {
  return (
    <div>
      <div className="flex flex-col justify-center p-8 bg-gray-100">
        <p className="text-2xl text-gray-900">
        The Student Exam Rank Management Portal is a comprehensive web application designed to assist educational institutions in managing student exam results efficiently. This portal provides administrators, teachers, and students with a user-friendly interface to access, analyze, and track student performance in exams. It offers a wide range of features to simplify the process of managing and monitoring student ranks, helping both educators and students to stay informed and motivated.
        </p>
        <ol className="list-decimal text-2xl">
          <li>
          Add, update, or remove student profiles.
          </li>
          <li>
          Automatically calculate ranks based on exam scores.
          </li>
          <li>
          Transparency: Provides real-time access to exam results, ensuring transparency and accountability.
          </li>
          <li>
          Motivates students through detailed performance analytics and personalized feedback from teachers.
          </li>
        </ol>
        <p className="text-2xl">
          Join our efficvient platform and embark on
          a transformative teaching journey. Happy Learning!
        </p>
      </div>
    </div>
  );
}

export default Home;