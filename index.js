const Client = require('./src/client');
const Definition = require('./src/definition');
const RequestFormat = require('./src/requestFormat');
const Focus = require('./src/focus');
const Res = require('./src/res');
const TextToSpeech = require('./src/textToSpeech');
const SpeechToText = require('./src/speechToText');
const Image = require('./src/image');
const SendImage = require('./src/sendImage');
const Choices = require('./src/choices');
const HashMap = require('./src/hashMap');
const Condition = require('./src/condition');
const ConditionalBranch = require('./src/conditionalBranch');
const DecisionPoint = require('./src/decisionPoint');
const ScoreScale = require('./src/scoreScale');
const ScoringDimension = require('./src/scoringDimension');
const ScoringCriteria = require('./src/scoringCriteria');
const RecursiveLoop = require('./src/recursiveLoop');
const EpistemicValidation = require('./src/epistemicValidation');
const ModelConfig = require('./src/modelConfig');
const Choice = require('./src/choice');
const FieldMetadata = require('./src/fieldMetadata');
const DetailedField = require('./src/detailedField');
const Response = require('./src/response');
const StreamingResponse = require('./src/streamingResponse');
const RequestBody = require('./src/requestBody');

module.exports = {
    Client,
    Definition,
    RequestFormat,
    Focus,
    Res,
    TextToSpeech,
    SpeechToText,
    Image,
    SendImage,
    Choices,
    HashMap,
    Condition,
    ConditionalBranch,
    DecisionPoint,
    ScoreScale,
    ScoringDimension,
    ScoringCriteria,
    RecursiveLoop,
    EpistemicValidation,
    ModelConfig,
    Choice,
    FieldMetadata,
    DetailedField,
    Response,
    StreamingResponse,
    RequestBody
};
