// src/components/Profile/Profile.jsx
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

/* icons (from your src/image folder) */
import mainLogo from "../../image/main_logo.png";
import launchIcon from "../../image/launch.png";
import communityIcon from "../../image/community.png";
import pointerIcon from "../../image/pointer.png";
import clockIcon from "../../image/clock.png";
import helpIcon from "../../image/help.png";
import phoneIcon from "../../image/phone.png";
import RupeeIcon from "../../image/rupee.png";
import codeIcon from "../../image/code.png";
import feedbackIcon from "../../image/feedback.png";
import resumeIcon from "../../image/resume.png";
import interviewIcon from "../../image/interview.png";
import calendarIcon from "../../image/calendar.png";
import bellIcon from "../../image/bell.png";
import supportIcon from "../../image/support.png";
import outIcon from "../../image/out.png";
import whatsappIcon from "../../image/whatsapp.png";
import cityIcon from "../../image/city.png";
import locationIcon from "../../image/location.png";
import homeIcon from "../../image/home.png";
import user1Icon from "../../image/user1.png";
import briefcaseIcon from "../../image/briefcase.png";
import marsIcon from "../../image/mars.png";
import cakeIcon from "../../image/cake.png";
import mailIcon from "../../image/mail.png";
import telephoneIcon from "../../image/telephone.png";
import userIcon from "../../image/user.png";
// import schoolIcon from "../../image/school.png";
// import collegeIcon from "../../image/college.png";
// import degreeIcon from "../../image/degree.png";

export default function Profile() {
  // UI state
  const [activeTab, setActiveTab] = useState("profile");
  const [editPanelOpen, setEditPanelOpen] = useState(false);
  const [editSection, setEditSection] = useState("personal");
  const [navLine, setNavLine] = useState(false);
  const [communityOpen, setCommunityOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [hoverMail, setHoverMail] = useState(false);
  const [hoverPhone, setHoverPhone] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [showStateBox, setShowStateBox] = useState(false);
  const [showCityBox, setShowCityBox] = useState(false);
  const [bodyScrollLocked, setBodyScrollLocked] = useState(false);
  const [validationError, setValidationError] = useState("");
  const [showValidationError, setShowValidationError] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});
  
  const navigate = useNavigate();
  const profileRef = useRef(null);
  const dropdownRef = useRef(null);
  const editPanelRef = useRef(null);
  const panelFormRef = useRef(null);
  
  // Data state
  const initial = {
    // Personal Information
    fullName: "Supriya Kaity",
    kodnestId: "KODTB09TV",
    email: "supriya@example.com",
    gender: "Female",
    dob: "2002-08-25",
    phone: "9749959434",
    whatsapp: "9749959434",
    experience: "",
    state: "Karnataka",
    city: "Bengaluru (Bangalore) Urban",
    careerGap: "0",
    preferredLocations: "Bangalore, Hyderabad, Mumbai",
    github: "https://github.com/SupriyaKaity",
    linkedin: "https://www.linkedin.com/in/supriya-kaity/",
    worked: "No",
    totalExp: "",
    
    // Academic Details
    // 10th Grade
    tenthSchoolName: "BURDWAN TOWN SCHOOL",
    tenthMarks: "83.8",
    tenthYear: "2019",
    
    // 12th Grade
    twelfthSchoolName: "BURDWAN TOWN SCHOOL",
    twelfthMarks: "81",
    twelfthYear: "2021",
    
    // UG Details
    ugRollNo: "1210012104",
    ugCourse: "Bachelor Of Technology (B.T./B.Tech.)",
    ugYear: "2025",
    ugCgpa: "7.8",
    ugCollege: "Bengal Institute Of Technology",
    ugBranch: "Computer Science And Engineering (CSE)",
    ugMarks: "75",
    ugBacklogs: "No",
  };

  const indiaData = {
    "Andhra Pradesh": ["Anantapur", "Chittoor", "East Godavari", "Guntur", "Krishna", "Kurnool", "Nellore", "Prakasam", "Srikakulam", "Visakhapatanam", "Vizianagaram", "West Godavari", "YSR Kadapa"],

    "Arunachal Pradesh": ["Tawang", "West Kameng","East Kameng", "Papum Pare", "Kurung Kumey", "Kra Daadi", "Lower Subansiri", "Upper Subansiri", "West Siang", "East Siang", "Siang", "Upper Siang", "Lower Siang", "Lower Dibang Valley", "Dibang Valley", "Anjaw", "Lohit", "Namsai", "Changlang", "Tirap", "Longding"],

    Assam: ["Baksa", "Barpeta", "Biswanath", "Bongaigaon", "Cachar", "Charaideo", "Chirang", "Darrang", "Dhemaji", "Dhubri", "Dibrugarh", "Goalpara", "Golaghat", "Hailakandi", "Hojai", "Jorhat", "Kamrup Metropolitan", "Kamrup", "Karbi", "Anglong", "Karimganj", "Kokrajhar", "Lakhimpur", "Majuli", "Morigaon", "Nagaon", "Nalbari", "Dima Hasao", "Sivasagar", "Sonitpur", "South Salmara-Mankachar", "Tinsukia", "Udalguri", "West Karbi Anglong"],

    Bihar: ["Araria", "Arwal", "Aurangabad", "Banka", "Begusarai", "Bhagalpur", "Bhojpur", "Buxar", "Darbhanga", 
    "East Champaran (Motihari)", "Gaya", "Gopalganj", "Jamui", "Jehanabad", "Kaimur (Bhabua)", "Katihar", "Khagaria", "Kishanganj", "Lakhisarai", "Madhepura", "Madhubani", "Munger (Monghyr)", "Muzaffarpur", "Nalanda", "Nawada", "Patna", "Purnia (Purnea)", "Rohtas", "Saharsa", "Samastipur", "Saran", "Sheikhpura", "Sheohar", "Sitamarhi", "Siwan", "Supaul", "Vaishali", "West Champaran"],

    "Chandigarh (UT)": ["Chandigarh"],

    Chhattisgarh: ["Balod", "Baloda Bazar", "Balrampur", "Bastar", "Bemetara", "Bijapur", "Bilaspur", "Dantewada (South Bastar)", "Dhamtari", "Durg", "Gariyaband", "Janjgir-Champa", "Jashpur", "Kabirdham (Kawardha)", "Kanker (North Bastar)", "Kondagaon", "Korba", "Korea (Koriya)", "Mahasamund", "Mungeli", "Narayanpur", "Raigarh", "Raipur", "Rajnandgaon", "Sukma", "Surajpur", "Surguja"],

    "Darda and Nagar Haveli (UT)": ["Dadra & Nagar Haveli"],

    "Daman and Diu (UT)": ["Daman", "Diu"],

    "Delhi (NCT)": ["Central Delhi", "East Delhi", "New Delhi", "North Delhi", "North East Delhi", "North West Delhi", "Shahdara", "South Delhi", "South East Delhi", "South West Delhi", "West Delhi"],

    Goa: ["North Goa", "South Goa"],

    Gujarat: ["Ahmedabad", "Amreli", "Anand", "Aravalli", "Banaskantha (Palanpur)", "Bharuch", "Bhavnagar", "Botad", "Chhota Udepur", "Dahod", "Dangs (Ahwa)", "Devbhoomi Dwarka", "Gandhinagar", "Gir Somnath", "Jamnagar", "Junagadh", "Kachchh", "Kheda (Nadiad)", "Mahisagar", "Mehsana", "Morbi", "Narmada (Rajpipla)", "Navsari", "Panchmahal (Godhra)", "Patan", "Porbandar", "Rajkot", "Sabarkantha (Himmatnagar)", "Surat", "Surendranagar", "Tapi (Vyara)", "Vadodara", "Valsad"],

    Haryana: ["Ambala", "Bhiwani", "Charkhi Dadri", "Faridabad", "Fatehabad", "Gurgaon", "Hisar", "Jhajjar", "Jind", "Kaithal", "Karnal", "Kurukshetra", "Mahendragarh", "Mewat", "Palwal", "Panchkula", "Panipat", "Rewari", "Rohtak", "Sirsa", "Sonipat", "Yamunanagar"],

    "Himachal Pradesh": ["Bilaspur", "Chamba", "Hamirpur", "Kangra", "Kinnaur", "Kullu", "Lahaul &amp; Spiti", "Mandi", "Shimla", "Sirmaur (Sirmour)", "Solan", "Una"],

    "Jammu and Kashmir": ["Anantnag", "Bandipore", "Baramulla", "Budgam", "Doda", "Ganderbal", "Jammu", "Kargil", "Kathua", "Kishtwar", "Kulgam", "Kupwara", "Leh", "Poonch", "Pulwama", "Rajouri", "Ramban", "Reasi", "Samba", "Shopian", "Srinagar", "Udhampur"],

    Jharkhand: ["Bokaro", "Chatra", "Deoghar", "Dhanbad", "Dumka", "East Singhbhum", "Garhwa", "Giridih", "Godda", "Gumla", "Hazaribag", "Jamtara", "Khunti", "Koderma", "Latehar", "Lohardaga", "Pakur", "Palamu", "Ramgarh", "Ranchi", "Sahibganj", "Seraikela-Kharsawan", "Simdega", "West Singhbhum"],

    Karnataka: ["Bagalkot", "Ballari (Bellary)", "Belagavi (Belgaum)", "Bengaluru (Bangalore) Rural", "Bengaluru (Bangalore) Urban", "Bidar", "Chamarajanagar", "Chikballapur", "Chikkamagaluru (Chikmagalur)", "Chitradurga", "Dakshina Kannada", "Davangere", "Dharwad", "Gadag", "Hassan", "Haveri", "Kalaburagi (Gulbarga)", "Kodagu", "Kolar", "Koppal", "Mandya", "Mysuru (Mysore)", "Raichur", "Ramanagara", "Shivamogga (Shimoga)", "Tumakuru (Tumkur)", "Udupi", "Uttara Kannada (Karwar)", "Vijayapura (Bijapur)", "Yadgir"],

    Kerala: ["Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod", "Kollam", "Kottayam", "Kozhikode", "Malappuram", "Palakkad", "Pathanamthitta", "Thiruvananthapuram", "Thrissur", "Wayanad"],

    Lakshadweep: ["Agatti", "Amini", "Androth", "Bithra", "Chethlath", "Kavaratti", "Kadmath", "Kalpeni", "Kilthan", "Minicoy"],

    "Madhya Pradesh": ["Agar Malwa", "Alirajpur", "Anuppur", "Ashoknagar", "Balaghat", "Barwani", "Betul", "Bhind", "Bhopal", "Burhanpur", "Chhatarpur", "Chhindwara", "Damoh", "Datia", "Dewas", "Dhar", "Dindori", "Guna", "Gwalior", "Harda", "Hoshangabad", "Indore", "Jabalpur", "Jhabua", "Katni", "Khandwa", "Khargone", "Mandla", "Mandsaur", "Morena", "Narsinghpur", "Neemuch", "Panna", "Panna", "Raisen", "Rajgarh", "Ratlam", "Rewa", "Sagar", "Satna", "Sehore", "Seoni", "Shahdol", "Shajapur", "Sheopur" , "Shivpuri", "Sidhi", "Singrauli", "Tikamgarh", "Ujjain", "Umaria", "Vidisha"],

    Maharashtra: ["Ahmednagar", "Akola", "Amravati", "Aurangabad", "Beed", "Bhandara", "Buldhana", "Chandrapur", "Dhule", "Gadchiroli", "Gondia", "Hingoli", "Jalgaon", "Jalna", "Kolhapur", "Latur", "Mumbai City", "Mumbai Suburban", "Nagpur", "Nanded", "Nandurbar", "Nashik", "Osmanabad", "Palghar", "Parbhani", "Pune", "Raigad", "Ratnagiri", "Sangli", "Satara", "Sindhudurg", "Solapur", "Thane", "Wardha", "Washim", "Yavatmal"],

    Manipur: ["Bishnupur", "Chandel", "Churachandpur", "Imphal East", "Imphal West", "Jiribam", "Kakching", "Kamjong", "Kangpokpi", "Noney", "Pherzawl", "Senapati", "Tamenglong", "Tengnoupal", "Thoubal", "Ukhrul"],

    Meghalaya: ["East Garo Hills", "East Jaintia Hills", "East Khasi Hills", "North Garo Hills", "Ri Bhoi", "South Garo Hills", "South West Garo Hills", "South West Khasi Hills", "West Garo Hills", "West Jaintia Hills", "West Khasi Hills"],

    Mizoram: ["Aizawl", "Champhai", "Kolasib", "Lawngtlai", "Lunglei", "Mamit", "Saiha", "Serchhip"],

    Nagaland: ["Dimapur", "Kiphire", "Kohima", "Longleng", "Mokokchung", "Mon", "Peren", "Phek", "Tuensang", "Wokha", "Zunheboto"],

    Odisha: ["Angul", "Balangir", "Balasore", "Bargarh", "Bhadrak", "Boudh", "Cuttack", "Deogarh", "Dhenkanal", "Gajapati", "Ganjam", "Jagatsinghapur", "Jajpur", "Jharsuguda", "Kalahandi", "Kandhamal", "Kendrapara", "Kendujhar (Keonjhar)", "Khordha", "Koraput", "Malkangiri", "Mayurbhanj", "Nabarangpur", "Nayagarh", "Nuapada", "Puri", "Rayagada", "Sambalpur", "Sonepur", "Sundargarh"],

    "Puducherry (UT)": ["Karaikal", "Mahe", "Pondicherry", "Yanam"],

    Punjab: ["Amritsar", "Barnala", "Bathinda", "Faridkot", "Fatehgarh Sahib", "Fazilka", "Ferozepur", "Gurdaspur", "Hoshiarpur", "Jalandhar", "Kapurthala", "Ludhiana", "Mansa", "Moga", "Muktsar", "Nawanshahr (Shahid Bhagat Singh Nagar)", "Pathankot", "Patiala", "Rupnagar", "Sahibzada Ajit Singh Nagar (Mohali)", "Sangrur", "Tarn Taran"],

    Rajasthan: ["Ajmer", "Alwar", "Banswara", "Baran", "Barmer", "Bharatpur", "Bhilwara", "Bikaner", "Bundi", "Chittorgarh", "Churu", "Dausa", "Dholpur", "Dungarpur", "Hanumangarh", "Jaipur", "Jaisalmer", "Jalore", "Jhalawar", "Jhunjhunu", "Jodhpur", "Karauli", "Kota", "Nagaur", "Pali", "Pratapgarh", "Rajsamand", "Sawai Madhopur", "Sikar", "Sirohi", "Sri Ganganagar", "Tonk", "Udaipur"],

    Sikkim:["East Sikkim", "North Sikkim", "South Sikkim", "West Sikkim"],

    "Tamil Nadu": ["Ariyalur", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul", "Erode", "Kanchipuram", "Kanyakumari", "Karur", "Krishnagiri", "Madurai", "Nagapattinam", "Namakkal", "Nilgiris", "Perambalur", "Pudukkottai", "Ramanathapuram", "Salem", "Sivaganga", "Thanjavur", "TheniThoothukudi (Tuticorin)", "Tiruchirappalli", "Tirunelveli", "Tiruppur", "Tiruvallur", "Tiruvannamalai", "Tiruvarur", "Vellore", "Viluppuram", "Virudhunagar"],

    Telangana: ["Adilabad", "Bhadradri Kothagudem", "Hyderabad", "Jagtial", "Jangaon", "Jayashankar Bhoopalpally", "Jogulamba Gadwal", "Kamareddy", "Karimnagar", "Khammam", "Komaram Bheem Asifabad", "Mahabubabad", "Mahabubnagar", "Mancherial", "Medak", "Medchal", "Nagarkurnool", "Nalgonda", "Nirmal", "Nizamabad", "Peddapalli", "Rajanna Sircilla", "Rangareddy", "Sangareddy", "Siddipet", "Suryapet", "Vikarabad", "Wanaparthy", "Warangal (Rural)", "Warangal (Urban)", "Yadadri Bhuvanagiri"],
    
    Tripura: ["Dhalai", "Gomati", "Khowai", "North Tripura", "Sepahijala", "South Tripura", "Unakoti", "West Tripura"],

    Uttarakhand: ["Almora", "Bageshwar", "Chamoli", "Champawat", "Dehradun", "Haridwar", "Nainital", "Pauri Garhwal", "Pithoragarh", "Rudraprayag", "Tehri Garhwal", "Udham Singh Nagar", "Uttarkashi"],

    "Uttar Pradesh": ["Agra", "Aligarh", "Allahabad", "Ambedkar Nagar", "Amethi (Chatrapati Sahuji Mahraj Nagar)", "Amroha (J.P. Nagar)", "Auraiya", "Azamgarh", "Baghpat", "Bahraich", "Ballia", "Balrampur", "Banda", "Barabanki", "Bareilly", "Basti", "Bhadohi", "Bijnor", "Budaun", "Bulandshahr", "Chandauli", "Chitrakoot", "Deoria", "Etah", "Etawah", "Faizabad", "Farrukhabad", "Fatehpur", "Firozabad", "Gautam Buddha Nagar", "Ghaziabad", "Ghazipur", "Gonda", "Gorakhpur", "Hamirpur", "Hapur (Panchsheel Nagar)", "Hardoi", "Hathras", "Jalaun", "Jaunpur", "Jhansi", "Kannauj", "Kanpur Dehat", "Kanpur Nagar", "Kanshiram Nagar (Kasganj)", "Kaushambi", "Kushinagar (Padrauna)", "Lakhimpur - Kheri", "Lalitpur", "Lucknow", "Maharajganj", "Mahoba", "Mainpuri", "Mathura", "Mau", "Meerut", "Mirzapur", "Moradabad", "Muzaffarnagar", "Pilibhit", "Pratapgarh", "RaeBareli", "Rampur", "Saharanpur", "Sambhal (Bhim Nagar)", "Sant Kabir Nagar", "Shahjahanpur", "Shamali (Prabuddh Nagar)", "Shravasti", "Siddharth Nagar", "Sitapur", "Sonbhadra", "Sultanpur", "Unnao", "Varanasi"],

    WestBengal: ["Alipurduar", "Bankura", "Birbhum", "Burdwan (Bardhaman)", "Cooch Behar", "Dakshin Dinajpur (South Dinajpur)", "Darjeeling", "Hooghly", "Howrah", "Jalpaiguri", "Kalimpong", "Kolkata", "Malda", "Murshidabad", "Nadia", "North 24 Parganas", "Paschim Medinipur (West Medinipur)", "Purba Medinipur (East Medinipur)", "Purulia", "South 24 Parganas", "Uttar Dinajpur (North Dinajpur)"],
  };

  const [data, setData] = useState(initial);
  const [form, setForm] = useState(initial);

  const locations = [
    "Bangalore",
    "Hyderabad",
    "Mumbai",
    "Chennai",
    "Delhi",
    "Pune",
    "Nagpur",
    "Kolkata",
    "Lucknow",
  ];

  

  const [selectedLocations, setSelectedLocations] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  // Click outside to close edit panel
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (editPanelRef.current && 
          !editPanelRef.current.contains(e.target) && 
          editPanelOpen &&
          !e.target.closest('.edit-link') && 
          !e.target.closest('.edit-small') &&
          !e.target.closest('.edit-academic-btn')) {
        closeEdit();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [editPanelOpen]);

  // Lock body scroll when edit panel is open
  useEffect(() => {
    if (editPanelOpen) {
      document.body.style.overflow = 'hidden';
      setBodyScrollLocked(true);
    } else {
      document.body.style.overflow = '';
      setBodyScrollLocked(false);
    }
    
    return () => {
      document.body.style.overflow = '';
      setBodyScrollLocked(false);
    };
  }, [editPanelOpen]);

  // Profile dropdown close on outside click
  useEffect(() => {
    function handleDocMouseDown(e) {
      const target = e.target;
      if (
        dropdownRef.current?.contains(target) ||
        profileRef.current?.contains(target)
      ) {
        return;
      }
      setProfileOpen(false);
    }

    document.addEventListener("mousedown", handleDocMouseDown);
    return () => document.removeEventListener("mousedown", handleDocMouseDown);
  }, []);

  // Load saved data
  useEffect(() => {
    const saved = localStorage.getItem("profileData");
    if (saved) {
      const parsed = JSON.parse(saved);
      setData(parsed);
      setForm(parsed);
      
      const list = parsed.preferredLocations
        ? parsed.preferredLocations.split(",").map(s => s.trim()).filter(Boolean)
        : [];
      setSelectedLocations(list);
    } else {
      setData(initial);
      setForm(initial);
      setSelectedLocations(initial.preferredLocations ? initial.preferredLocations.split(",").map(s => s.trim()).filter(Boolean) : []);
    }
  }, []);

  useEffect(() => {
    setForm(prev => ({
      ...prev,
      preferredLocations: selectedLocations.join(", ")
    }));
  }, [selectedLocations]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Open edit panel for specific section
  // function openEdit(section = "personal") {
  //   setForm(data);
  //   setEditSection(section);
  //   setEditPanelOpen(true);
  //   setShowValidationError(false);
  //   setValidationError("");

  //   const list = data.preferredLocations
  //     ? data.preferredLocations.split(",").map(s => s.trim()).filter(Boolean)
  //     : [];
  //   setSelectedLocations(list);
  // }

  function openEdit(section = "personal") {
  setForm(data); // Set form to current data
  setEditSection(section);
  setEditPanelOpen(true);
  setShowValidationError(false);
  setValidationError("");
  setFieldErrors({}); // Clear any previous errors

  const list = data.preferredLocations
    ? data.preferredLocations.split(",").map(s => s.trim()).filter(Boolean)
    : [];
  setSelectedLocations(list);
}

  function closeEdit() {
    setEditPanelOpen(false);
    setShowStateBox(false);
    setShowCityBox(false);
    setShowDropdown(false);
    setShowValidationError(false);
    setValidationError("");
    setForm(data);

    const list = data.preferredLocations
      ? data.preferredLocations.split(",").map(s => s.trim()).filter(Boolean)
      : [];
    setSelectedLocations(list);
  }

  // function handleChange(e) {
  //   const { name, value } = e.target;
  //   setForm((s) => ({ ...s, [name]: value }));
    
  //   // Hide validation error when user starts typing
  //   if (showValidationError) {
  //     setShowValidationError(false);
  //     setValidationError("");
  //   }
  // }

  // Update handleChange to clear errors when user starts typing
function handleChange(e) {
  const { name, value } = e.target;
  setForm((s) => ({ ...s, [name]: value }));
  
  // Clear error for this field when user starts typing
  if (fieldErrors[name]) {
    setFieldErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[name];
      return newErrors;
    });
  }
  
  // Hide global validation error when user starts typing
  if (showValidationError) {
    setShowValidationError(false);
    setValidationError("");
  }
}

  // Validation function
  // const validateForm = () => {
  //   const requiredFields = {
  //     personal: ['fullName', 'phone', 'whatsapp', 'dob', 'gender', 'worked'],
  //     generic: ['careerGap', 'state', 'city', 'preferredLocations', 'github', 'linkedin', 'worked'],
  //     tenth: ['tenthSchoolName', 'tenthYear', 'tenthMarks'],
  //     twelfth: ['twelfthSchoolName', 'twelfthYear', 'twelfthMarks'],
  //     ug: ['ugRollNo', 'ugCollege', 'ugCourse', 'ugBranch', 'ugMarks', 'ugCgpa', 'ugYear', 'ugBacklogs']
  //   };

  //   let missingFields = [];
    
  //   if (editSection === "personal") {
  //     requiredFields.personal.forEach(field => {
  //       if (!form[field] || form[field].trim() === '') {
  //         missingFields.push(field);
  //       }
  //     });
  //     if (form.worked === "Yes" && (!form.totalExp || form.totalExp.trim() === '')) {
  //       missingFields.push('totalExp');
  //     }
  //   } else if (editSection === "generic") {
  //     requiredFields.generic.forEach(field => {
  //       if (!form[field] || form[field].trim() === '') {
  //         missingFields.push(field);
  //       }
  //     });
  //   } else if (editSection === "tenth") {
  //     requiredFields.tenth.forEach(field => {
  //       if (!form[field] || form[field].trim() === '') {
  //         missingFields.push(field);
  //       }
  //     });
  //   } else if (editSection === "twelfth") {
  //     requiredFields.twelfth.forEach(field => {
  //       if (!form[field] || form[field].trim() === '') {
  //         missingFields.push(field);
  //       }
  //     });
  //   } else if (editSection === "ug") {
  //     requiredFields.ug.forEach(field => {
  //       if (!form[field] || form[field].trim() === '') {
  //         missingFields.push(field);
  //       }
  //     });
  //   }

  //   return missingFields;
  // };

  const validateForm = () => {
  const requiredFields = {
    personal: ['fullName', 'phone', 'whatsapp', 'dob', 'gender', 'worked'],
    generic: ['careerGap', 'state', 'city', 'preferredLocations', 'github', 'linkedin', 'worked'],
    tenth: ['tenthSchoolName', 'tenthYear', 'tenthMarks'],
    twelfth: ['twelfthSchoolName', 'twelfthYear', 'twelfthMarks'],
    ug: ['ugRollNo', 'ugCollege', 'ugCourse', 'ugBranch', 'ugMarks', 'ugCgpa', 'ugYear', 'ugBacklogs']
  };

  const errors = {};
  
  if (editSection === "personal") {
    requiredFields.personal.forEach(field => {
      if (!form[field] || form[field].toString().trim() === '') {
        errors[field] = 'This field is required';
      }
    });
    if (form.worked === "Yes" && (!form.totalExp || form.totalExp.toString().trim() === '')) {
      errors.totalExp = 'This field is required';
    }
  } else if (editSection === "generic") {
    requiredFields.generic.forEach(field => {
      if (!form[field] || form[field].toString().trim() === '') {
        errors[field] = 'This field is required';
      }
    });
    // Additional validation for URLs
    if (form.github && !form.github.startsWith('http')) {
      errors.github = 'Please enter a valid URL';
    }
    if (form.linkedin && !form.linkedin.startsWith('http')) {
      errors.linkedin = 'Please enter a valid URL';
    }
  } else if (editSection === "tenth") {
    requiredFields.tenth.forEach(field => {
      if (!form[field] || form[field].toString().trim() === '') {
        errors[field] = 'This field is required';
      }
    });
    // Validate marks
    if (form.tenthMarks && (parseFloat(form.tenthMarks) < 0 || parseFloat(form.tenthMarks) > 100)) {
      errors.tenthMarks = 'Marks must be between 0 and 100';
    }
  } else if (editSection === "twelfth") {
    requiredFields.twelfth.forEach(field => {
      if (!form[field] || form[field].toString().trim() === '') {
        errors[field] = 'This field is required';
      }
    });
    if (form.twelfthMarks && (parseFloat(form.twelfthMarks) < 0 || parseFloat(form.twelfthMarks) > 100)) {
      errors.twelfthMarks = 'Marks must be between 0 and 100';
    }
  } else if (editSection === "ug") {
    requiredFields.ug.forEach(field => {
      if (!form[field] || form[field].toString().trim() === '') {
        errors[field] = 'This field is required';
      }
    });
    if (form.ugMarks && (parseFloat(form.ugMarks) < 0 || parseFloat(form.ugMarks) > 100)) {
      errors.ugMarks = 'Marks must be between 0 and 100';
    }
    if (form.ugCgpa && (parseFloat(form.ugCgpa) < 0 || parseFloat(form.ugCgpa) > 10)) {
      errors.ugCgpa = 'CGPA must be between 0 and 10';
    }
  }

  return errors;
};

  // function handleSave(e) {
  //   e.preventDefault();
  //   e.stopPropagation();
    
  //   const missingFields = validateForm();
    
  //   if (missingFields.length > 0) {
  //     const fieldNames = {
  //       fullName: "Full Name",
  //       phone: "Primary Contact",
  //       whatsapp: "WhatsApp Contact",
  //       dob: "Date of Birth",
  //       gender: "Gender",
  //       worked: "Work Experience",
  //       totalExp: "Total Experience",
  //       careerGap: "Career Gap",
  //       state: "Current State",
  //       city: "Current City",
  //       preferredLocations: "Preferred Locations",
  //       github: "GitHub Link",
  //       linkedin: "LinkedIn Link",
  //       tenthSchoolName: "10th School Name",
  //       tenthYear: "10th Year of Passout",
  //       tenthMarks: "10th Marks",
  //       twelfthSchoolName: "12th School Name",
  //       twelfthYear: "12th Year of Passout",
  //       twelfthMarks: "12th Marks",
  //       ugRollNo: "University Roll No",
  //       ugCollege: "College Name",
  //       ugCourse: "Course",
  //       ugBranch: "Branch",
  //       ugMarks: "UG Marks",
  //       ugCgpa: "CGPA",
  //       ugYear: "Year of Passout",
  //       ugBacklogs: "Backlog Status"
  //     };
      
  //     const missingFieldNames = missingFields.map(field => fieldNames[field] || field).join(", ");
  //     setValidationError(`Please fill in all required fields: ${missingFieldNames}`);
  //     setShowValidationError(true);
      
  //     // Scroll to top of form
  //     if (panelFormRef.current) {
  //       panelFormRef.current.scrollTop = 0;
  //     }
  //     return;
  //   }
    
  //   setData(form);
  //   localStorage.setItem("profileData", JSON.stringify(form));
  //   setShowDropdown(false);
  //   setEditPanelOpen(false);
  //   setShowValidationError(false);
  // }

  function handleSave(e) {
  e.preventDefault();
  e.stopPropagation();
  
  const errors = validateForm();
  setFieldErrors(errors);
  
  if (Object.keys(errors).length > 0) {
    setValidationError(`Please fix ${Object.keys(errors).length} error(s) before saving`);
    setShowValidationError(true);
    
    // Scroll to first error
    if (panelFormRef.current) {
      panelFormRef.current.scrollTop = 0;
    }
    return;
  }
  
  // Clear errors if validation passes
  setFieldErrors({});
  setShowValidationError(false);
  setValidationError("");
  
  // Save data
  setData(form);
  localStorage.setItem("profileData", JSON.stringify(form));
  
  // Close panel
  setShowDropdown(false);
  setEditPanelOpen(false);
}

  function handleClear() {
  if (editSection === "personal") {
    setForm({
      ...initial,
      // Keep these from current data to avoid losing them
      preferredLocations: data.preferredLocations,
      github: data.github,
      linkedin: data.linkedin,
      state: data.state,
      city: data.city,
      careerGap: data.careerGap,
      worked: data.worked,
      totalExp: data.totalExp
    });
  } else if (editSection === "generic") {
    setForm({
      ...form,
      careerGap: "",
      state: "",
      city: "",
      preferredLocations: "",
      github: "",
      linkedin: "",
      worked: "No",
      totalExp: ""
    });
    setSelectedLocations([]);
    setShowDropdown(false);
  } else if (editSection === "tenth") {
    setForm({
      ...form,
      tenthSchoolName: "",
      tenthMarks: "",
      tenthYear: ""
    });
  } else if (editSection === "twelfth") {
    setForm({
      ...form,
      twelfthSchoolName: "",
      twelfthMarks: "",
      twelfthYear: ""
    });
  } else if (editSection === "ug") {
    setForm({
      ...form,
      ugRollNo: "",
      ugCollege: "",
      ugCourse: "",
      ugBranch: "",
      ugMarks: "",
      ugCgpa: "",
      ugYear: "",
      ugBacklogs: "No"
    });
  }
  
  setShowValidationError(false);
  setValidationError("");
}

  function triggerNavAnimation(tab) {
    setActiveTab(tab);
    setNavLine(true);
    setTimeout(() => setNavLine(false), 700);
  }

  const toggleLocation = (loc) => {
    setSelectedLocations(prev => {
      if (prev.includes(loc)) return prev.filter(x => x !== loc);
      return [...prev, loc];
    });
    
    if (showValidationError) {
      setShowValidationError(false);
      setValidationError("");
    }
  };

  const removeLocation = (loc) => {
    setSelectedLocations(prev => prev.filter(x => x !== loc));
  };

  const clearAll = () => {
    setSelectedLocations([]);
    setShowDropdown(false);
  };

  // Edit Panel Components
  const PersonalInfoSection = () => (
    <div className="edit-section">
      <div className="panel-head">
        <h2>Personal Information</h2>
        <button className="close-x" onClick={closeEdit}>✕</button>
      </div>

      {/* Profile picture upload */}
      <div className="photo-section">
        <div className="photo-wrapper">
          <label htmlFor="profilePhoto" className="photo-circle">
            {profilePhoto ? (
              <img src={profilePhoto} alt="profile" />
            ) : (
              <span className="upload-text">Upload</span>
            )}
            <div className="edit-overlay">✏️ Edit</div>
          </label>
          {!profilePhoto && (
            <p className="photo-info">
              Allowed formats: JPG, JPEG, PNG<br />
              Max size: 1 MB
            </p>
          )}
        </div>

        <input
          type="file"
          id="profilePhoto"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              if (file.size > 1000000) {
                alert("File size must be less than 1 MB");
                return;
              }
              const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
              if (!allowedTypes.includes(file.type)) {
                alert("Only JPG, JPEG, PNG allowed");
                return;
              }
              const reader = new FileReader();
              reader.onload = () => setProfilePhoto(reader.result);
              reader.readAsDataURL(file);
            }
          }}
          hidden
        />
      </div>

      <form onSubmit={handleSave} className="panel-form" ref={panelFormRef}>
        <div className="row">
          <label>Full Name <span className="req">*</span></label>
          <input name="fullName" value={form.fullName} onChange={handleChange} placeholder="Full Name" />
        </div>
        
        <div className="row two">
          <div>
            <label>Primary Contact <span className="req">*</span></label>
            <input name="phone" value={form.phone} onChange={handleChange} placeholder="Primary Contact" />
          </div>
          <div>
            <label>Whatsapp Contact <span className="req">*</span></label>
            <input name="whatsapp" value={form.whatsapp} onChange={handleChange} placeholder="Whatsapp Contact" />
          </div>
        </div>
        
        <div className="row">
          <label>Date of Birth <span className="req">*</span></label>
          <div className="dob-wrap">
            <input
              type="date"
              name="dob"
              value={form.dob}
              onChange={handleChange}
            />
            <span className="calendar-ico">📅</span>
          </div>
        </div>
        
        <div className="row two">
          <div>
            <label>Gender <span className="req">*</span></label>
            <div className="radio-group">
              <label><input type="radio" name="gender" value="Male" checked={form.gender === "Male"} onChange={handleChange} /> Male</label>
              <label><input type="radio" name="gender" value="Female" checked={form.gender === "Female"} onChange={handleChange} /> Female</label>
            </div>
          </div>

          <div>
            <label>Work Experience <span className="req">*</span></label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="worked"
                  value="Yes"
                  checked={form.worked === "Yes"}
                  onChange={(e) => setForm({ ...form, worked: "Yes" })}
                /> Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="worked"
                  value="No"
                  checked={form.worked === "No"}
                  onChange={(e) => setForm({ ...form, worked: "No", totalExp: "" })}
                /> No
              </label>
            </div>
          </div>
        </div>
        
        {form.worked === "Yes" && (
          <div className="row">
            <label>Total Experience (Years) <span className="req">*</span></label>
            <select name="totalExp" value={form.totalExp} onChange={handleChange}>
              <option value="">Select</option>
              {[...Array(5)].map((_, i) => (
                <option key={i} value={i}>{i} Years</option>
              ))}
            </select>
          </div>
        )}

        <div className="panel-actions">
          <button type="button" className="btn clear" onClick={handleClear}>Clear</button>
          <div className="right-actions">
            <button type="button" className="btn cancel" onClick={closeEdit}>Cancel</button>
            <button type="submit" className="btn save">Save</button>
          </div>
        </div>
      </form>
    </div>
  );

  const GenericDetailsSection = () => (
    <div className="edit-section">
      <div className="panel-head">
        <h2>Generic Details</h2>
        <button className="close-x" onClick={closeEdit}>✕</button>
      </div>

      <form onSubmit={handleSave} className="panel-form" ref={panelFormRef}>
        <div className="row">
          <label>Career gap in years <span className="req">*</span></label>
          <input name="careerGap" value={form.careerGap} onChange={handleChange} placeholder="0" />
        </div>

        <div className="location-container">
          <div>
            <label>Current State <span className="req">*</span></label>
            <div
              className="select-box"
              onClick={() => {
                setShowStateBox(!showStateBox);
                setShowCityBox(false);
              }}
            >
              {form.state || "Select State"}
            </div>
            {showStateBox && (
              <div className="scroll-box">
                {Object.keys(indiaData).map((state) => (
                  <div
                    key={state}
                    className={`item ${form.state === state ? "selected" : ""}`}
                    onClick={() => {
                      setForm((prev) => ({
                        ...prev,
                        state,
                        city: "",
                      }));
                      setShowStateBox(false);
                    }}
                  >
                    {state}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <label>Current City <span className="req">*</span></label>
            <div
              className={`select-box ${!form.state ? "disabled" : ""}`}
              onClick={() => {
                if (!form.state) return;
                setShowCityBox(!showCityBox);
                setShowStateBox(false);
              }}
            >
              {form.city || "Select City"}
            </div>
            {showCityBox && form.state && (
              <div className="scroll-box">
                {indiaData[form.state].map((city) => (
                  <div
                    key={city}
                    className={`item ${form.city === city ? "selected" : ""}`}
                    onClick={() => {
                      setForm((prev) => ({
                        ...prev,
                        city,
                      }));
                      setShowCityBox(false);
                    }}
                  >
                    {city}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="row">
          <label>Preferred Location <span className="req">*</span></label>
          {selectedLocations.length === 0 && !showDropdown && (
            <div className="placeholder-box" onClick={() => setShowDropdown(true)}>
              Select locations ▼
            </div>
          )}
          {selectedLocations.length > 0 && (
            <div className="selected-box">
              {selectedLocations.map((loc) => (
                <div key={loc} className="tag">
                  {loc}
                  <span className="remove" onClick={() => removeLocation(loc)}>✕</span>
                </div>
              ))}
              <span className="clear-all" onClick={clearAll}>✕</span>
              <span className="open-dropdown" onClick={() => setShowDropdown(!showDropdown)}>
                ˅
              </span>
            </div>
          )}
          {showDropdown && (
            <div className="checkbox-scroll">
              {locations.map((loc) => (
                <label key={loc} className="checkbox-item">
                  <input
                    type="checkbox"
                    checked={selectedLocations.includes(loc)}
                    onChange={() => toggleLocation(loc)}
                  />
                  {loc}
                </label>
              ))}
            </div>
          )}
        </div>

        <div className="row two">
          <div>
            <label>Github Link <span className="req">*</span></label>
            <input name="github" value={form.github} onChange={handleChange} placeholder="https://github.com/username" />
          </div>
          <div>
            <label>LinkedIn Link <span className="req">*</span></label>
            <input name="linkedin" value={form.linkedin} onChange={handleChange} placeholder="https://linkedin.com/in/..." />
          </div>
        </div>

        <div className="row">
          <label>Are you working professional? <span className="req">*</span></label>
          <div className="radio-group">
            <label className="radio-option">
              <input
                type="radio"
                name="workingProfessional"
                value="Yes"
                checked={form.worked === "Yes"}
                onChange={() => setForm({ ...form, worked: "Yes" })}
              />
              <span>Yes</span>
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="workingProfessional"
                value="No"
                checked={form.worked === "No"}
                onChange={() => setForm({ ...form, worked: "No" })}
              />
              <span>No</span>
            </label>
          </div>
        </div>

        <div className="row">
          <label>Upload Resume</label>
          <div className="resume-upload-section">
            <div className="resume-actions">
              <a href="#" className="view-resume-link">
                View Current Resume
              </a>
              <button type="button" className="btn-update-resume">
                Update Resume
                <span className="update-icon">↗</span>
              </button>
            </div>
          </div>
        </div>

        <div className="panel-actions">
          <button type="button" className="btn clear" onClick={handleClear}>Clear</button>
          <div className="right-actions">
            <button type="button" className="btn cancel" onClick={closeEdit}>Cancel</button>
            <button type="submit" className="btn save">Save</button>
          </div>
        </div>
      </form>
    </div>
  );

    const TenthGradeSection = () => (
    <div className="edit-section">
      <div className="panel-head academic-panel-head">
        <div className="academic-title-section">
          <div className="academic-main-title">
            <h2>Academic Details</h2>
          </div>
          <div className="academic-subtitle-container">
            <div className="vertical-accent" />
            <div className="academic-subtitle">10th Grade</div>
          </div>
        </div>
        <button className="close-x" onClick={closeEdit}>✕</button>
      </div>

      <form onSubmit={handleSave} className="panel-form" ref={panelFormRef}>
        <div className="row">
          <label>School Name <span className="req">*</span></label>
          <input name="tenthSchoolName" value={form.tenthSchoolName} onChange={handleChange} placeholder="School Name" />
        </div>

        <div className="row">
          <label>Year of Passout <span className="req">*</span></label>
          <input name="tenthYear" value={form.tenthYear} onChange={handleChange} placeholder="Year" type="number" min="1900" max="2099" />
        </div>

        <div className="row">
          <label>Mark in % <span className="req">*</span></label>
          <input name="tenthMarks" value={form.tenthMarks} onChange={handleChange} placeholder="Percentage" type="number" step="0.1" min="0" max="100" />
        </div>

        <div className="panel-actions">
          <button type="button" className="btn clear" onClick={handleClear}>Clear</button>
          <div className="right-actions">
            <button type="button" className="btn cancel" onClick={closeEdit}>Cancel</button>
            <button type="submit" className="btn save">Save</button>
          </div>
        </div>
      </form>
    </div>
  );

    const TwelfthGradeSection = () => (
    <div className="edit-section">
      <div className="panel-head academic-panel-head">
        <div className="academic-title-section">
          <div className="academic-main-title">
            <h2>Academic Details</h2>
          </div>
          <div className="academic-subtitle-container">
            <div className="vertical-accent" />
            <div className="academic-subtitle">12th / PUC / Intermediate / Diploma</div>
          </div>
        </div>
        <button className="close-x" onClick={closeEdit}>✕</button>
      </div>

      <form onSubmit={handleSave} className="panel-form" ref={panelFormRef}>
        <div className="row">
          <label>School Name <span className="req">*</span></label>
          <input name="twelfthSchoolName" value={form.twelfthSchoolName} onChange={handleChange} placeholder="School Name" />
        </div>

        <div className="row">
          <label>Year of Passout <span className="req">*</span></label>
          <input name="twelfthYear" value={form.twelfthYear} onChange={handleChange} placeholder="Year" type="number" min="1900" max="2099" />
        </div>

        <div className="row">
          <label>Mark in % <span className="req">*</span></label>
          <input name="twelfthMarks" value={form.twelfthMarks} onChange={handleChange} placeholder="Percentage" type="number" step="0.1" min="0" max="100" />
        </div>

        <div className="panel-actions">
          <button type="button" className="btn clear" onClick={handleClear}>Clear</button>
          <div className="right-actions">
            <button type="button" className="btn cancel" onClick={closeEdit}>Cancel</button>
            <button type="submit" className="btn save">Save</button>
          </div>
        </div>
      </form>
    </div>
  );

    const UGDetailsSection = () => (
    <div className="edit-section">
      <div className="panel-head academic-panel-head">
        <div className="academic-title-section">
          <div className="academic-main-title">
            <h2>Academic Details</h2>
          </div>
          <div className="academic-subtitle-container">
            <div className="vertical-accent" />
            <div className="academic-subtitle">UG Detail</div>
          </div>
        </div>
        <button className="close-x" onClick={closeEdit}>✕</button>
      </div>

      <form onSubmit={handleSave} className="panel-form" ref={panelFormRef}>
        <div className="row">
          <label>University Roll No. <span className="req">*</span></label>
          <input name="ugRollNo" value={form.ugRollNo} onChange={handleChange} placeholder="University Roll Number" />
        </div>

        <div className="row">
          <label>College Name <span className="req">*</span></label>
          <input name="ugCollege" value={form.ugCollege} onChange={handleChange} placeholder="College Name" />
        </div>

        <div className="row">
          <label>Course <span className="req">*</span></label>
          <select name="ugCourse" value={form.ugCourse} onChange={handleChange}>
            <option value="">Select Course</option>
            <option value="Bachelor Of Technology (B.T./B.Tech.)">Bachelor Of Technology (B.T./B.Tech.)</option>
            <option value="Bachelor of Engineering (B.E.)">Bachelor of Engineering (B.E.)</option>
            <option value="Bachelor of Science (B.Sc.)">Bachelor of Science (B.Sc.)</option>
            <option value="Bachelor of Computer Applications (BCA)">Bachelor of Computer Applications (BCA)</option>
            <option value="Bachelor of Business Administration (BBA)">Bachelor of Business Administration (BBA)</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="row">
          <label>Branch <span className="req">*</span></label>
          <select name="ugBranch" value={form.ugBranch} onChange={handleChange}>
            <option value="">Select Branch</option>
            <option value="Computer Science And Engineering (CSE)">Computer Science And Engineering (CSE)</option>
            <option value="Information Technology (IT)">Information Technology (IT)</option>
            <option value="Electronics and Communication Engineering (ECE)">Electronics and Communication Engineering (ECE)</option>
            <option value="Mechanical Engineering">Mechanical Engineering</option>
            <option value="Civil Engineering">Civil Engineering</option>
            <option value="Electrical Engineering">Electrical Engineering</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="row two">
          <div>
            <label>Marks in % <span className="req">*</span></label>
            <input name="ugMarks" value={form.ugMarks} onChange={handleChange} placeholder="Percentage" type="number" step="0.1" min="0" max="100" />
          </div>
          <div>
            <label>CGPA <span className="req">*</span></label>
            <input name="ugCgpa" value={form.ugCgpa} onChange={handleChange} placeholder="CGPA" type="number" step="0.1" min="0" max="10" />
          </div>
        </div>

        <div className="row">
          <label>Year of Passout <span className="req">*</span></label>
          <input name="ugYear" value={form.ugYear} onChange={handleChange} placeholder="Year" type="number" min="1900" max="2099" />
        </div>

        <div className="row">
          <label>Do you have any Backlog in College? <span className="req">*</span></label>
          <div className="radio-group">
            <label className="radio-option">
              <input
                type="radio"
                name="ugBacklogs"
                value="Yes"
                checked={form.ugBacklogs === "Yes"}
                onChange={handleChange}
              />
              <span>Yes</span>
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="ugBacklogs"
                value="No"
                checked={form.ugBacklogs === "No"}
                onChange={handleChange}
              />
              <span>No</span>
            </label>
          </div>
        </div>

        <div className="panel-actions">
          <button type="button" className="btn clear" onClick={handleClear}>Clear</button>
          <div className="right-actions">
            <button type="button" className="btn cancel" onClick={closeEdit}>Cancel</button>
            <button type="submit" className="btn save">Save</button>
          </div>
        </div>
      </form>
    </div>
  );

  return (
    <div className={`profile-page-root ${bodyScrollLocked ? 'scroll-locked' : ''}`}>
      {/* NAVBAR */}
      <div className="navbarHome">
        <img
          src={mainLogo}
          alt="logo"
          className="logoProfile"
          onClick={() => navigate("/home")}
          style={{ cursor: "pointer" }}
        />

        <div className="nav-links">
          <a
            className={activeTab === "Home" ? "active" : ""}
            onClick={() => {
              triggerNavAnimation("Home");
              navigate("/home");
            }}
            style={{ cursor: "pointer" }}
          >
            Home
          </a>

          <a
            href="#"
            className={activeTab === "Courses" ? "active" : ""}
            onClick={() => triggerNavAnimation("Courses")}
          >
            Courses
          </a>

          <a
            href="#"
            className={activeTab === "Practice" ? "active" : ""}
            onClick={() => triggerNavAnimation("Practice")}
          >
            Practice
          </a>

          <a
            href="#"
            className={`${activeTab === "Placements" ? "active" : ""} placements-rgb`}
            onClick={() => triggerNavAnimation("Placements")}
          >
            Placements
          </a>

          {/* COMMUNITY */}
          <div
            className="community-wrapper"
            onMouseEnter={() => setCommunityOpen(true)}
            onMouseLeave={() => setCommunityOpen(false)}
          >
            <div className="community-link">
              Community
              <span className={`arrow ${communityOpen ? "rotate" : ""}`}>⌄</span>
            </div>

            <div className={`community-dropdown ${communityOpen ? "show" : ""}`}>
              <div className="community-column">
                <div className="community-item no-hover">
                  <img src={launchIcon} className="item-icon" alt="" />
                  <div>
                    <h4>Kodnest Community</h4>
                  </div>
                </div>
                <div className="community-item">
                  <img src={communityIcon} className="item-icon" alt="" />
                  <div>
                    <h4>Community</h4>
                    <p>Join a like-minded community to share ideas</p>
                  </div>
                  <span className="right-arrow">›</span>
                </div>
                <div className="community-item">
                  <img src={pointerIcon} className="item-icon" alt="" />
                  <div>
                    <h4>Road Map</h4>
                    <p>Discover upcoming features and share your input</p>
                  </div>
                  <span className="right-arrow">›</span>
                </div>
              </div>
              <div className="community-column">
                <div className="community-item">
                  <img src={clockIcon} className="item-icon" alt="" />
                  <div>
                    <h4>Change Log</h4>
                    <p>Catch up on the latest updates and new features</p>
                  </div>
                  <span className="right-arrow">›</span>
                </div>
                <div className="community-item">
                  <img src={helpIcon} className="item-icon" alt="" />
                  <div>
                    <h4>Help</h4>
                    <p>Get help from the community</p>
                  </div>
                  <span className="right-arrow">›</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Icons */}
        <div className="right-icons">
          <div
            className="icon-box"
            onMouseEnter={() => setHoverMail(true)}
            onMouseLeave={() => setHoverMail(false)}
          >
            <img src={mailIcon} className="emoji-icon" alt="mail" />
            {hoverMail && <div className="tooltip">Feedback</div>}
          </div>

          <a href="/refer-page" className="wallet-icon">
            <img src={RupeeIcon} alt="money" className="wallet-emoji" />
          </a>

          <div
            className="icon-box"
            onMouseEnter={() => setHoverPhone(true)}
            onMouseLeave={() => setHoverPhone(false)}
          >
            <img src={phoneIcon} className="emoji-icon" alt="phone" />
            {hoverPhone && <div className="tooltip">Mentor Connect</div>}
          </div>

          {/* PROFILE */}
          <div className="profile-section">
            <img
              ref={profileRef}
              src={profilePhoto ? profilePhoto : user1Icon}
              className="profile-img"
              onClick={(e) => {
                e.stopPropagation();
                setTimeout(() => {
                  setProfileOpen(prev => !prev);
                }, 0);
              }}
              alt="profile"
            />

            {profileOpen && (
              <motion.div
                ref={dropdownRef}
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="profile-dropdown"
              >
                <div className="profile-header">
                  <img
                    src={profilePhoto ? profilePhoto : user1Icon}
                    className="profile-img-sm"
                    alt="profile"
                  />
                  <div>
                    <h3>Supriya</h3>
                    <p className="batch">November Batch <br/>2025</p>
                    <p className="status">Offline</p>
                  </div>
                </div>

                <div className="profile-links">
                  <div className="profile-option">
                    <img src={userIcon} className="option-icon" alt="" />
                    <a onClick={() => navigate("/profile")} style={{ cursor: "pointer" }}>
                      My Account
                    </a>
                  </div>
                  <div className="divider"></div>
                  <div className="profile-option">
                    <img src={codeIcon} className="option-icon" alt="" />
                    <a href="#">Compiler</a>
                  </div>
                  <div className="divider"></div>
                  <div className="profile-option">
                    <img src={feedbackIcon} className="option-icon" alt="" />
                    <a href="#">User Feedback</a>
                  </div>
                  <div className="divider"></div>
                  <div className="profile-option">
                    <img src={resumeIcon} className="option-icon" alt="" />
                    <a href="#">Resume Builder</a>
                  </div>
                  <div className="divider"></div>
                  <div className="profile-option">
                    <img src={interviewIcon} className="option-icon" alt="" />
                    <a href="#">Mock Interview</a>
                  </div>
                  <div className="divider"></div>
                  <div className="profile-option">
                    <img src={calendarIcon} className="option-icon" alt="" />
                    <a href="#">Apply for Leave</a>
                  </div>
                  <div className="divider"></div>
                  <div className="profile-option">
                    <img src={bellIcon} className="option-icon" alt="" />
                    <a href="#">What's New</a>
                  </div>
                  <div className="divider"></div>
                  <div className="profile-option">
                    <img src={supportIcon} className="option-icon" alt="" />
                    <a href="#">Help Center</a>
                  </div>
                  <div className="divider"></div>
                  <div className="profile-option">
                    <img src={outIcon} className="option-icon" alt="" />
                    <a href="#">Log Out</a>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Profile tabs under main navbar */}
      <div className="profile-tabs-wrapper">
        <div className="profile-tabs">
          <div
            className={`tab ${activeTab === "profile" ? "active" : ""}`}
            onClick={() => setActiveTab("profile")}
          >
            Profile
          </div>
          <div
            className={`tab ${activeTab === "attendance" ? "active" : ""}`}
            onClick={() => setActiveTab("attendance")}
          >
            Attendance
          </div>
          <div
            className={`tab ${activeTab === "subscription" ? "active" : ""}`}
            onClick={() => setActiveTab("subscription")}
          >
            Subscription
          </div>
          <div
            className={`tab ${activeTab === "referral" ? "active" : ""}`}
            onClick={() => setActiveTab("referral")}
          >
            Referral
          </div>
          <div
            className={`tab ${activeTab === "certificate" ? "active" : ""}`}
            onClick={() => setActiveTab("certificate")}
          >
            Certificate
          </div>
        </div>
      </div>

      {/* Page content */}
      <div className="profile-content-wrap">
        {/* Top summary card */}
        <div className="card profile-summary">
          <div className="profile-left">
            <div className="avatar-wrap">
              <img
                src={profilePhoto ? profilePhoto : userIcon}
                alt="avatar"
                className="avatar-img"
              />
            </div>
            <div className="profile-meta">
              <div className="name-row">
                <h3 className="name">{data.fullName || "Supriya Kaity"}</h3>
                <div className="kodnest-id">{data.kodnestId || "KODTB09TV"}</div>
              </div>

              <div className="info-row">
                <img src={mailIcon} className="small-ico" alt="" />
                <span>{data.email || "supriya@example.com"}</span>

                <img src={marsIcon} className="small-ico ml" alt="" />
                <span>{data.gender || "Female"}</span>

                <img src={cakeIcon} className="small-ico ml" alt="" />
                <span>{data.dob ? new Date(data.dob).toLocaleDateString() : "25/08/2002"}</span>
              </div>

              <div className="info-row second">
                <img src={whatsappIcon} className="small-ico" alt="" />
                <span>{data.whatsapp || "9749959434"}</span>

                <img src={telephoneIcon} className="small-ico ml" alt="" />
                <span>{data.phone || "9749959434"}</span>

                <img src={user1Icon} className="small-ico ml" alt="" />
                <span>{data.worked === "Yes" ? `${data.totalExp || "0"} Years Experience` : "No Experience - Fresher"}</span>
              </div>
            </div>
          </div>

          <div className="profile-right">
            <button className="edit-link" onClick={() => openEdit("personal")}>
              Edit
            </button>
          </div>
        </div>

        {/* Generic Details Card */}
        <div className="card generic-details">
          <div className="card-head">
            <div className="vertical-accent" />
            <h4>Generic Details</h4>
            <div className="card-edit">
              <button className="edit-small" onClick={() => openEdit("generic")}>
                Edit
              </button>
            </div>
          </div>

          <div className="generic-grid">
            <div className="left-col">
              <div className="field">
                <img src={briefcaseIcon} className="mini-ico" alt="" />
                <div>
                  <div className="field-label">Work Experience</div>
                  <div className="field-value">{data.worked === "Yes" ? `${data.totalExp || "0"} Years Experience` : "No Experience - Fresher"}</div>
                </div>
              </div>

              <div className="field mt">
                <img src={homeIcon} className="mini-ico" alt="" />
                <div>
                  <div className="field-label">Current State</div>
                  <div className="field-value">{data.state || "Karnataka"}</div>
                </div>
              </div>

              <div className="field mt">
                <img src={locationIcon} className="mini-ico" alt="" />
                <div>
                  <div className="field-label">Preferred Location</div>
                  <div className="field-value">
                    {data.preferredLocations || "Bangalore, Hyderabad, Mumbai"}
                  </div>
                </div>
              </div>
            </div>

            <div className="right-col">
              <div className="field">
                <div>
                  <div className="field-label">Career Gap</div>
                  <div className="field-value">{data.careerGap || "0"}</div>
                </div>
              </div>

              <div className="field mt">
                <img src={cityIcon} className="mini-ico" alt="" />
                <div>
                  <div className="field-label">Current City</div>
                  <div className="field-value">{data.city || "Bengaluru (Bangalore) Urban"}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="links-row">
            <div className="link-pill">
              <div className="pill-head">Github profile</div>
              <a href={data.github || "#"} className="pill-link" target="_blank" rel="noopener noreferrer">
                {data.github ? "GitHub" : "GitHub"}
              </a>
            </div>

            <div className="link-pill">
              <div className="pill-head">LinkedIn profile</div>
              <a href={data.linkedin || "#"} className="pill-link" target="_blank" rel="noopener noreferrer">
                {data.linkedin ? "LinkedIn" : "LinkedIn"}
              </a>
            </div>

            <div className="link-pill">
              <div className="pill-head">Resume</div>
              <a href="#" className="pill-link">View Resume</a>
            </div>
          </div>
        </div>

        {/* Academic Details Card - 10th Grade */}
        <div className="card academic-details">
          <div className="card-head">
            <div className="vertical-accent" />
            <h4>10th Grade</h4>
            <div className="card-edit">
              <button className="edit-small" onClick={() => openEdit("tenth")}>
                Edit
              </button>
            </div>
          </div>

          <div className="academic-grid">
            <div className="left-col">
              <div className="field">
                <div className="field-label">School Name</div>
                <div className="field-value">{data.tenthSchoolName || "BURDWAN TOWN SCHOOL"}</div>
              </div>
              
              
                <div className="field">
                  <div className="field-label">Marks in %</div>
                  <div className="field-value">{data.tenthMarks || "83.8"}</div>
                </div>
            </div>  
            <div className="right-col"> 
              <div className="field">
                <div className="field-label">Year of Passout</div>
                <div className="field-value">{data.tenthYear || "2019"}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Academic Details Card - 12th Grade */}
        <div className="card academic-details">
          <div className="card-head">
            <div className="vertical-accent" />
            <h4>12th / PUC / Intermediate / Diploma</h4>
            <div className="card-edit">
              <button className="edit-small" onClick={() => openEdit("twelfth")}>
                Edit
              </button>
            </div>
          </div>

          <div className="academic-grid">
            <div className="left-col">
              <div className="field">
                <div className="field-label">School Name</div>
                <div className="field-value">{data.twelfthSchoolName || "BURDWAN TOWN SCHOOL"}</div>
              </div>
            
            
              <div className="field">
                <div className="field-label">Marks in %</div>
                <div className="field-value">{data.twelfthMarks || "81"}</div>
              </div>
            </div>
              <div className="right-col"> 
                <div className="field">
                  <div className="field-label">Year of Passout</div>
                  <div className="field-value">{data.twelfthYear || "2021"}</div>
                </div>
              </div>
            </div>
          </div>
        

        {/* Academic Details Card - UG Detail */}
        <div className="card academic-details">
          <div className="card-head">
            <div className="vertical-accent" />
            <h4>UG Detail</h4>
            <div className="card-edit">
              <button className="edit-small" onClick={() => openEdit("ug")}>
                Edit
              </button>
            </div>
          </div>

          <div className="academic-grid">
            <div className="left-col">
              <div className="field">
                <div className="field-label">University Roll No.</div>
                <div className="field-value">{data.ugRollNo || "1210012104"}</div>
              </div>
              
              <div className="field">
                <div className="field-label">Course Name</div>
                <div className="field-value">{data.ugCourse || "Bachelor Of Technology (B.T./B.Tech.)"}</div>
              </div>
            
            
              <div className="field">
                <div className="field-label">Year of Passout</div>
                <div className="field-value">{data.ugYear || "2025"}</div>
              </div>
              
              <div className="field">
                <div className="field-label">CGPA</div>
                <div className="field-value">{data.ugCgpa || "7.8"}</div>
              </div>
            </div>
            <div className="right-col"> 
              <div className="field">
                <div className="field-label">College Name</div>
                <div className="field-value">{data.ugCollege || "Bengal Institute Of Technology"}</div>
              </div>
              
              
                <div className="field">
                  <div className="field-label">Branch</div>
                  <div className="field-value">{data.ugBranch || "Computer Science And Engineering (CSE)"}</div>
              </div>
              
              <div className="field">
                <div className="field-label">Marks in %</div>
                <div className="field-value">{data.ugMarks || "75"}</div>
              </div>
              
            
              <div className="field">
                <div className="field-label">Active Backlogs</div>
                <div className="field-value">{data.ugBacklogs === "Yes" ? "Yes" : "No Backlogs"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Validation Error Popup */}
      {showValidationError && (
        <div className="validation-error-popup">
          <div className="validation-error-content">
            <span className="error-icon">⚠️</span>
            <div className="error-message">{validationError}</div>
            <button className="error-close" onClick={() => setShowValidationError(false)}>✕</button>
          </div>
        </div>
      )}

      {/* Slide-in edit panel */}
      {editPanelOpen && (
        <div className="edit-panel-overlay" onClick={closeEdit}>
          <div 
            ref={editPanelRef}
            className={`edit-panel ${editPanelOpen ? "open" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            {editSection === "personal" && <PersonalInfoSection />}
            {editSection === "generic" && <GenericDetailsSection />}
            {editSection === "tenth" && <TenthGradeSection />}
            {editSection === "twelfth" && <TwelfthGradeSection />}
            {editSection === "ug" && <UGDetailsSection />}
          </div>
        </div>
      )}
    </div>
  );
}