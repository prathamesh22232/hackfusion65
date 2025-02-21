import React from "react";

const About = () => {
  return (
    <div className="bg-gradient-to-br from-blue-100 to-blue-500 min-h-screen p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg p-10">
        <h1 className="text-4xl font-semibold text-center text-blue-800 mb-8">
          Key Features & Functionalities of the Portal
        </h1>

        <div className="space-y-8">
          {/* Student Election System */}
          <div className="bg-blue-50 p-6 rounded-xl shadow-md">
            <h2 className="text-3xl font-semibold text-blue-700 mb-4">
              1. Student Election System
            </h2>
            <p className="text-lg text-gray-700">
              The Student Election System provides an online platform for student councils to hold elections with candidate profiles. It ensures a secure voting mechanism by using college email authentication, making sure only authorized students can vote. The system also offers live tracking of the election results, giving full transparency to the voting process. Students can view the ongoing tally, ensuring the integrity of the election is maintained in real-time.
            </p>
          </div>

          {/* Automated Health & Leave Notifications */}
          <div className="bg-blue-50 p-6 rounded-xl shadow-md">
            <h2 className="text-3xl font-semibold text-blue-700 mb-4">
              2. Automated Health & Leave Notifications
            </h2>
            <p className="text-lg text-gray-700">
              The Automated Health & Leave Notifications feature ensures smooth communication between students, the college, and their families. If a student is reported sick by the college doctor, an automatic email is sent to the class coordinator to keep them informed. Similarly, if a student leaves the campus for any reason, an automated email notification is sent to their parents for safety tracking. This system keeps everyone in the loop while prioritizing student health and safety.
            </p>
          </div>

          {/* Campus Facility Booking System */}
          <div className="bg-blue-50 p-6 rounded-xl shadow-md">
            <h2 className="text-3xl font-semibold text-blue-700 mb-4">
              3. Campus Facility Booking System
            </h2>
            <p className="text-lg text-gray-700">
              The Campus Facility Booking System provides a convenient online platform for students and faculty to reserve campus facilities like tennis courts or the auditorium. It incorporates an approval mechanism from the relevant authorities, ensuring that bookings are managed effectively. The system also shows the availability status of these facilities in real-time, making it easy for users to check when a space is available for their events or personal use.
            </p>
          </div>

          {/* Transparent Application & Approval System */}
          <div className="bg-blue-50 p-6 rounded-xl shadow-md">
            <h2 className="text-3xl font-semibold text-blue-700 mb-4">
              4. Transparent Application & Approval System
            </h2>
            <p className="text-lg text-gray-700">
              This system streamlines the process of submitting and tracking applications for various purposes such as event organization, budget approvals, and sponsorship requests. All applications are visible to students and faculty, promoting transparency in the approval process. The system follows a clear approval workflow, where the designated authority reviews the requests. If any application remains unattended for a certain period, it is given priority to ensure that nothing is overlooked. Additionally, students and faculty can track the status of their applications in real-time, ensuring full visibility and accountability.
            </p>
          </div>

          {/* Academic Integrity & Cheating Record System */}
          <div className="bg-blue-50 p-6 rounded-xl shadow-md">
            <h2 className="text-3xl font-semibold text-blue-700 mb-4">
              5. Academic Integrity & Cheating Record System
            </h2>
            <p className="text-lg text-gray-700">
              The Academic Integrity & Cheating Record System ensures that any violations of academic honesty, such as cheating, are addressed transparently. If a student is caught cheating during an exam, their details, including their name, the reason for the violation, and proof, are publicly visible to all students. This serves as both a deterrent to cheating and an educational opportunity for students to understand the importance of academic integrity.
            </p>
          </div>

          {/* Anonymous Complaint System */}
          <div className="bg-blue-50 p-6 rounded-xl shadow-md">
            <h2 className="text-3xl font-semibold text-blue-700 mb-4">
              6. Anonymous Complaint System
            </h2>
            <p className="text-lg text-gray-700">
              The Anonymous Complaint System allows students to report issues or concerns anonymously, ensuring that their identity remains protected. These complaints are visible to all members of the college community and are subject to moderation to ensure that only appropriate content is shared. If a complaint is deemed valid and requires further investigation, the identity of the complainant may be revealed, but only if a majority of the board members approve. This system encourages openness and allows students to address problems without fear of retaliation.
            </p>
          </div>

          {/* Transparent College Budget & Sponsorship Tracking */}
          <div className="bg-blue-50 p-6 rounded-xl shadow-md">
            <h2 className="text-3xl font-semibold text-blue-700 mb-4">
              7. Transparent College Budget & Sponsorship Tracking
            </h2>
            <p className="text-lg text-gray-700">
              This system ensures full transparency regarding the college's sponsorships and budget allocations. All sponsorships, event funds, and departmental budgets are publicly available for review by students and faculty. Additionally, for verification purposes, any expense made under the college's budget (such as bills, receipts, and images) must be uploaded. A similar approach is taken to manage the mess budgets, which are handled by students, ensuring complete transparency and accountability.
            </p>
          </div>

          {/* Restricted Access for College Members Only */}
          <div className="bg-blue-50 p-6 rounded-xl shadow-md">
            <h2 className="text-3xl font-semibold text-blue-700 mb-4">
              8. Restricted Access for College Members Only
            </h2>
            <p className="text-lg text-gray-700">
              To maintain the authenticity of the system and ensure that only legitimate users have access, the portal is restricted to college members only. This means that users must log in with a valid college email ID, preventing unauthorized individuals from accessing the platform. This measure helps maintain the security and integrity of the system, ensuring that all users are affiliated with the institution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
