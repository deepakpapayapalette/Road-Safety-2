import React from "react";

const HealthAssessmentTable = () => {
    const data = [
    {
      category: "Vision",
      rows: [
        ["Glaucoma/ Peripheral Vision Loss", 20, 2, 2, 20, 2],
        ["Colour Blindness", 2, 2, 2, 2, 2],
        ["Night Blindness", 12, 0, 0, 12, 0],
        ["Blurred Vision", 6, 0, 0, 6, 0],
      ],
    },
    {
      category: "Hearing",
      rows: [
        ["Hearing Loss (Unilateral)", 20, 20, 20, 20, 20],
        ["Hearing Loss (Bilateral)", 2, 2, 2, 2, 2],
        ["Difficulty recognising sound direction", 12, 12, 12, 12, 12],
        ["Ear Infection", 6, 6, 6, 6, 6],
        ["Tinnitus", 6, 6, 6, 6, 6],
      ],
    },
    {
      category: "Neurological Health",
      rows: [
        ["Migraine", 20, 20, 20, 20, 20],
        ["Seizures", 2, 2, 2, 2, 2],
        ["Epilepsy", 12, 12, 12, 12, 12],
        ["History of Facial Paralysis", 6, 6, 6, 6, 6],
        ["History of Brain Stroke", 6, 6, 6, 6, 6],
        ["History of Brain Injury/Clotting", 12, 12, 12, 12, 12],
        ["Episodes of Unconsciousness/Fatigue/Dizziness", 6, 6, 6, 6, 6],
      ],
    },
    {
      category: "Mental Health",
      rows: [
        ["Anxiety", 20, 20, 20, 20, 20],
        ["Depression", 2, 2, 2, 2, 2],
        ["Phobia", 12, 12, 12, 12, 12],
      ],
    },
    {
      category: "Cognitive Health",
      rows: [
        ["Alzheimer’s/ Dementia", 20, 20, 20, 20, 20],
        ["Mild Cognitive Impairment (MCI)", 2, 2, 2, 2, 2],
        ["Parkinson’s Disease", 12, 12, 12, 12, 12],
        ["Reaction Time and Reflexes Issues", 2, 2, 2, 2, 2],
        ["Poor Judgement", 12, 12, 12, 12, 12],
      ],
    },
    {
      category: "Respiratory Health",
      rows: [
        ["Chronic Obstructive Pulmonary Disease (COPD)", 20, 20, 20, 20, 20],
        ["Asthma", 2, 2, 2, 2, 2],
        ["Obstructive Sleep Apnea (OSA)", 12, 12, 12, 12, 12],
        ["Lung Cancer (Preexisting/History)", 2, 2, 2, 2, 2],
        ["High-Altitude Effects", 12, 12, 12, 12, 12],
      ],
    },
    {
      category: "Diabetes",
      rows: [
        ["Hypoglycemia (Low Blood Sugar)", 20, 20, 20, 20, 20],
        ["Hyperglycemia (High Blood Sugar)", 2, 2, 2, 2, 2],
        ["Diabetic retinopathy", 12, 12, 12, 12, 12],
        ["Diabetic Neuropathy (Diabetic Foot)", 2, 2, 2, 2, 2],
      ],
    },
    {
      category: "Cardiac Health",
      rows: [
        ["Arrhythmias/ Irregular Heart Rhythms", 20, 20, 20, 20, 20],
        ["Chest Pain/ Angina", 2, 2, 2, 2, 2],
        ["History of Cardiac/ Heart Attacks", 12, 12, 12, 12, 12],
        ["History of Cardiac Surgery", 2, 2, 2, 2, 2],
        ["Coronary Artery Bypass Grafting (CABG)", 20, 20, 20, 20, 20],
        ["Heart Valve Surgery", 2, 2, 2, 2, 2],
        ["PCI / Angioplasty", 12, 12, 12, 12, 12],
        ["Pacemaker Implant", 2, 2, 2, 2, 2],
      ],
    },
    {
      category: "Bone and Spine Health",
      rows: [
        ["Spinal Disorders", 20, 20, 20, 20, 20],
        ["Osteoporosis", 2, 2, 2, 2, 2],
        ["Arthritis (Spinal and Joint)", 12, 12, 12, 12, 12],
        ["Fractures and Trauma", 2, 2, 2, 2, 2],
        ["Ankylosing Spondylitis", 20, 20, 20, 20, 20],
      ],
    },
    {
      category: "Injury History",
      rows: [
        ["Spine Injury", 20, 20, 20, 20, 20],
        ["Brain Injury", 2, 2, 2, 2, 2],
        ["Disability (Partial or Full)", 12, 12, 12, 12, 12],
        ["Loss of limbs", 2, 2, 2, 2, 2],
      ],
    },
    {
      category: "Cancer",
      rows: [
        ["Eye Cancer", 20, 20, 20, 20, 20],
        ["Brain Cancer", 2, 2, 2, 2, 2],
        ["Lung Cancer", 12, 12, 12, 12, 12],
        ["Bone Cancer", 2, 2, 2, 2, 2],
        ["Leukemia and Lymphoma", 20, 20, 20, 20, 20],
        ["Liver Cancer", 2, 2, 2, 2, 2],
        ["Chemotherapy History", 12, 12, 12, 12, 12],
        ["Radiation therapy History", 2, 2, 2, 2, 2],
      ],
    },
    {
      category: "Addictions and Substance Use",
      rows: [
        ["Alcohol", 20, 20, 20, 20, 20],
        ["Smoking Tobacco", 2, 2, 2, 2, 2],
        ["Smokeless Tobacco (Gutkha/Khaani etc)", 12, 12, 12, 12, 12],
        ["Sedatives and Anxiolytics", 2, 2, 2, 2, 2],
        ["Opioid Painkillers", 20, 20, 20, 20, 20],
        ["Antidepressants", 2, 2, 2, 2, 2],
        ["Antihistamines (for Allergies)", 12, 12, 12, 12, 12],
        ["Anticonvulsants (for Seizures)", 2, 2, 2, 2, 2],
        ["Muscle Relaxants", 20, 20, 20, 20, 20],
        ["Blood Pressure Medications", 2, 2, 2, 2, 2],
        ["Diabetes Medications (insulin)", 12, 12, 12, 12, 12],
        ["Chemotherapy Agents", 2, 2, 2, 2, 2],
      ],
    },
  ];

  const headers = [
    "Health Parameters",
    "No of cases",
    "No of cases with co-morbidity",
    "No of cases report as critical cases",
    "No of cases has improvements",
    "No of cases has no improvements",
  ];

  return (
    <>
    <div className="space">
      <div className="overflow-x-auto  rounded-lg border border-gray-600">
        <table className="w-full border-collapse text-sm">
          <thead className="bg-blue-600 text-white">
            <tr>
              {headers.map((h, i) => (
                <th key={i} className="px-4 py-2 border text-left">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((section, i) => (
              <React.Fragment key={i}>
                {/* Category Row */}
                <tr className="bg-white">
                  <td colSpan={6} className="px-4 py-2 font-bold text-[18px]">
                    {section.category}
                  </td>
                </tr>
                {/* Sub Rows */}
                {section.rows.map((row, j) => (
                  <tr
                    key={j}
                    className={j % 2 === 0 ? "bg-white" : "bg-gray-50 hover:bg-gray-100"}
                  >
                    <td className="px-4 py-2 border">{row[0]}</td>
                    <td className="px-4 py-2 border text-center">{row[1]}</td>
                    <td className="px-4 py-2 border text-center">{row[2]}</td>
                    <td className="px-4 py-2 border text-center">{row[3]}</td>
                    <td className="px-4 py-2 border text-center">{row[4]}</td>
                    <td className="px-4 py-2 border text-center">{row[5]}</td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default HealthAssessmentTable;
