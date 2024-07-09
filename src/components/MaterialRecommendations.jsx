const MaterialRecommendations = ({ recommendations }) => {
  const totalScore = recommendations.reduce((sum, material) => sum + material.wpScore, 0);
  return (
    <div>
      <div className="px-5">
        <h2 className="text-base font-bold my-3 text-center">
          Rekomendasi E-Commerce
        </h2>
        <div className="flex flex-wrap gap-2 justify-center">
          {recommendations.map((material, i) => {
            const vectorScore = material.wpScore / totalScore;
            return (
              <div
                key={material.id}
                className="border px-[2px] w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 rounded-xl shadow-md p-2 flex flex-col items-center"
              >
                <strong>
                  {i + 1}. {material.name}
                </strong>{" "}
                <br />
                <span>Nilai Vektor S: {material.wpScore.toFixed(3)}</span>
                <br />
                <span>  
                  Nilai Vektor V: {vectorScore.toFixed(4)}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MaterialRecommendations;
