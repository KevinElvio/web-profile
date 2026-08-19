// CVSection.jsx
import PropTypes from 'prop-types';
import { FiUpload, FiDownload } from 'react-icons/fi';

const CVSection = ({ data, onFileUpload }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Curriculum Vitae</h2>
      
      <div className="space-y-6">
        {/* Current CV */}
        {data.file && (
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-700 mb-2">CV Saat Ini:</h3>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">{data.fileName}</span>
              <a
                href={data.file}
                download={data.fileName}
                className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2"
              >
                <FiDownload className="w-4 h-4" />
                <span>Download</span>
              </a>
            </div>
          </div>
        )}

        {/* Upload New CV */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload CV Baru (PDF)
          </label>
          <input
            type="file"
            accept=".pdf"
            onChange={(e) => onFileUpload(e, 'cv')}
            className="hidden"
            id="cvUpload"
          />
          <label
            htmlFor="cvUpload"
            className="cursor-pointer bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 w-fit"
          >
            <FiUpload className="w-5 h-5" />
            <span>Pilih File CV</span>
          </label>
          <p className="text-sm text-gray-500 mt-2">
            Format file: PDF, maksimal 5MB
          </p>
        </div>
      </div>
    </div>
  );
};

CVSection.propTypes = {
  data: PropTypes.shape({
    file: PropTypes.string,
    fileName: PropTypes.string
  }).isRequired,
  onFileUpload: PropTypes.func.isRequired
};

export default CVSection;