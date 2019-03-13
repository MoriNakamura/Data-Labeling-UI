"""
Python Aplication Template
Licence: GPLv3
"""

import os
from app import app


#----------------------------------------
# launch
#----------------------------------------

if __name__ == "__main__":
	port = int(os.environ.get("PORT", 5000))
	print(app)
	app.run(host='0.0.0.0', port=port, debug=True, use_reloader=False)