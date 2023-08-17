import { useFieldActions } from 'app/actions';
import { FieldModel } from 'app/models/FieldModel';
import { getAllField } from 'app/service/field.service';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const useSelectField = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authActions = useFieldActions(dispatch);
  const [fields, setFields] = useState<FieldModel[]>([]);

  const allField = async () => {
    const result = await getAllField();

    if (result != null) {
      authActions.allField(result.data);
      setFields([...result.data]);
    }
  };

  const clickField = () => navigate('/chatgpt1');
  useEffect(() => {
    allField();
  }, []);

  useEffect(() => {
    console.log("🚀 ~ file: hooks.ts:30 ~ useEffect ~ fields:", fields)
  }, [fields]);

  return {
    fields,
    clickField
  };
};

export { useSelectField };
