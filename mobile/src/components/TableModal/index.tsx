import { Overlay, ModalBody, ModalHeader, Form, Input } from "./styles";
import { Modal, TouchableOpacity, Platform } from "react-native";
import {useState} from "react";

import { Text } from "../Text";
import { Close } from "../Icons/Close";
import { Button } from "../Button";

interface TableModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (table: string) => void;
}

export function TableModal({visible, onClose, onSave}: TableModalProps) {
  const [table, setTable] = useState("");

  function handleSave() {
    onSave(table);
    onClose();
  }

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
    >
      <Overlay behavior={Platform.OS === "android" ? "height" : "padding"}>
        <ModalBody>
          <ModalHeader>
            <Text weight="600">Informe a mesa</Text>
            <TouchableOpacity onPress={onClose}>
              <Close color="#666" />
            </TouchableOpacity>
          </ModalHeader>

          <Form>
            <Input
              placeholder="Número da mesa"
              placeholderTextColor="#666"
              keyboardType="number-pad"
              onChangeText={setTable}
            />

            <Button onPress={handleSave} disabled={table.length === 0}>
              Salvar
            </Button>
          </Form>
        </ModalBody>
      </Overlay>
    </Modal>
  );
}
