import { useState } from "react";

interface Testimonial {
  _id: string;
  name: string;
  review: string;
  stars: number;
  photo: string;
  visible?: boolean;
  approved?: boolean;
}

const AdminPanel = () => {
  const [password, setPassword] = useState("");
  const [token, setToken] = useState<string | null>(null);
  const [pending, setPending] = useState<Testimonial[]>([]);
  const [allTestimonials, setAllTestimonials] = useState<Testimonial[]>([]);
  const [message, setMessage] = useState("");
  const [stats, setStats] = useState({ students: 0, teachers: 0 });

  const API_URL = "https://school-backend1-ideo.onrender.com/api/admin";

  const login = async () => {
    try {
      const res = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (res.ok) {
        setToken(data.token);
        fetchPending(data.token);
        fetchAllTestimonials(data.token);
        fetchStats();
        setMessage("");
      } else {
        setMessage(data.error || "Login failed");
      }
    } catch {
      setMessage("Server error");
    }
  };

  const fetchPending = async (authToken: string) => {
    const res = await fetch(`${API_URL}/pending`, {
      headers: { Authorization: `Bearer ${authToken}` },
    });
    const data = await res.json();
    setPending(data);
  };

  const fetchAllTestimonials = async (authToken: string) => {
    const res = await fetch(`${API_URL}/all`, {
      headers: { Authorization: `Bearer ${authToken}` },
    });
    const data = await res.json();
    setAllTestimonials(data);
  };

  const fetchStats = () => {
    // Replace with real API call if needed
    setStats({ students: 230, teachers: 15 });
  };

  const handleAction = async (
    id: string,
    action: "approve" | "reject" | "delete"
  ) => {
    const method = action === "delete" ? "DELETE" : "POST";
    const res = await fetch(`${API_URL}/${action}/${id}`, {
      method,
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    setMessage(data.message);
    if (token) {
      fetchPending(token);
      fetchAllTestimonials(token);
    }
  };

  const toggleVisibility = async (id: string, visible: boolean) => {
    const res = await fetch(`${API_URL}/visibility/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ visible }),
    });
    const data = await res.json();
    setMessage(data.message);
    if (token) {
      fetchAllTestimonials(token);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-10">
      <h1 className="text-3xl font-bold text-center text-orange-500 mb-6">
        Admin Panel
      </h1>

      {!token ? (
        <div className="max-w-md mx-auto bg-white shadow-lg p-6 rounded-xl">
          <input
            type="password"
            placeholder="Enter Admin Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-4 p-2 border rounded"
          />
          <button
            onClick={login}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded"
          >
            Login
          </button>
          {message && (
            <p className="mt-4 text-center text-red-500">{message}</p>
          )}
        </div>
      ) : (
        <div>
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-4 shadow rounded-lg text-center">
              <h2 className="text-2xl font-bold text-gray-800">
                {stats.students}
              </h2>
              <p className="text-gray-500">Total Students</p>
            </div>
            <div className="bg-white p-4 shadow rounded-lg text-center">
              <h2 className="text-2xl font-bold text-gray-800">
                {stats.teachers}
              </h2>
              <p className="text-gray-500">Total Teachers</p>
            </div>
            <a
              href="https://docs.google.com/spreadsheets/d/1WN7bEdMNdzhMOAt1Bb3iMCPJy2VK15XZuqi2yS1YHQk"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-100 hover:bg-blue-200 text-blue-600 p-4 rounded-lg shadow text-center"
            >
              Teacher Hiring Sheet
            </a>
            <a
              href="https://docs.google.com/spreadsheets/d/1Rtl60BusQAwGhiQMYLX675rIZjejmAzqN8Tgb_zv3y8"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-100 hover:bg-green-200 text-green-600 p-4 rounded-lg shadow text-center"
            >
              Student Admission Sheet
            </a>
          </div>

          {/* Pending Testimonials */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Pending Testimonials
            </h3>
            {pending.length === 0 ? (
              <p className="text-gray-600">No pending testimonials.</p>
            ) : (
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {pending.map((t) => (
                  <div
                    key={t._id}
                    className="bg-white p-4 rounded-xl shadow-md border text-center"
                  >
                    <img
                      src={t.photo}
                      alt={t.name}
                      className="w-16 h-16 rounded-full mx-auto object-cover mb-3 border"
                    />
                    <h3 className="font-bold text-lg">{t.name}</h3>
                    <p className="text-gray-600 my-2">{t.review}</p>
                    <div className="text-yellow-400 text-lg">
                      {"★".repeat(t.stars)}
                      {"☆".repeat(5 - t.stars)}
                    </div>
                    <div className="mt-4 flex justify-center gap-3">
                      <button
                        onClick={() => handleAction(t._id, "approve")}
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleAction(t._id, "reject")}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
                      >
                        Reject
                      </button>
                      <button
                        onClick={() => handleAction(t._id, "delete")}
                        className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-1 rounded"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* All Testimonials */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              All Testimonials
            </h3>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              {allTestimonials.map((t) => (
                <div
                  key={t._id}
                  className="bg-white p-4 rounded-xl shadow-md border text-center"
                >
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="w-16 h-16 rounded-full mx-auto object-cover mb-3 border"
                  />
                  <h3 className="font-bold text-lg">{t.name}</h3>
                  <p className="text-gray-600 my-2">{t.review}</p>
                  <div className="text-yellow-400 text-lg">
                    {"★".repeat(t.stars)}
                    {"☆".repeat(5 - t.stars)}
                  </div>
                  <p
                    className={`mt-2 font-semibold ${
                      t.visible ? "text-green-600" : "text-gray-500"
                    }`}
                  >
                    {t.visible ? "Visible" : "Hidden"}
                  </p>
                  <div className="mt-4 flex justify-center gap-3">
                    <button
                      onClick={() => toggleVisibility(t._id, !t.visible)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded"
                    >
                      {t.visible ? "Hide" : "Show"}
                    </button>
                    <button
                      onClick={() => handleAction(t._id, "delete")}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;

